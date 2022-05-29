<script setup lang="ts">
import { computed, onMounted, ref, PropType } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

interface ITask {
  id: number
  content: string
  completed: boolean
}

interface IEvents {
  (e: 'add', task: ITask): void
  (e: 'remove', task: ITask): void
  (e: 'check', task: ITask): void
  (e: 'check-all', checked: boolean): void
}

const emits = defineEmits<IEvents>()
const taskContent = ref('')
const props = defineProps({
  taskList: {
    required: true,
    type: Array as PropType<ITask[]>
  }
})
const taskList = ref(props.taskList)
const checkAll = computed({
  get () {
    return taskList.value.every(task => task.completed)
  },
  set (completed: boolean) {
    taskList.value.forEach(task => task.completed = completed)
  }
})
const done = computed(() => taskList.value.filter(task => task.completed).length)
const taskCount = computed(() => taskList.value.length)
const hasTask = computed(() => taskCount.value > 0)
const inputRef = ref<HTMLInputElement>()

const addTask = (): void => {
  const content = taskContent.value.trim()
  if (!content) return

  const task: ITask = {
    id: new Date().valueOf(),
    content,
    completed: false
  }

  taskList.value.push(task)
  taskContent.value = ''
  emits('add', task)
}

const removeTask = (id: number): ITask | undefined => {
  const task = taskList.value.find(t => t.id === id)
  taskList.value = taskList.value.filter(t => t !== task)
  emits('remove', task!)
  return task
}

const onCheck = (task: ITask): void => {
  emits('check', task)
}

const toggleTaskStatus = (e: Event) => {
  const oInput = e.target as HTMLInputElement
  const allChecked: boolean = oInput.checked
  taskList.value.forEach(task => task.completed = allChecked)
  emits('check-all', allChecked)
}
</script>

<template>
<div class="todolist">
  <div class="typing-area">
    <input
      type="text"
      ref="inputRef" 
      class="typing-input"
      v-model="taskContent"
      :placeholder="t('todolist.placeholder')"
      v-focus
      @keyup.enter="addTask"
    >
    <button class="typing-btn" @click="addTask">{{ t('todolist.add') }}</button>
  </div>
  <div class="task-list" v-show="hasTask">
    <div class="task-item" v-for="task in taskList" :key="task.id">
      <input type="checkbox" v-model="task.completed" @change="onCheck(task)" />
      <span :class="['task-content', { 'is-completed': task.completed }]">{{ task.content }}</span>
      <a href="javascript:;" @click="removeTask(task.id)">{{ t('todolist.delete') }}</a>
    </div>
    <div class="check-all">
      <input type="checkbox" v-model="checkAll" @change="toggleTaskStatus" />
      <span class="check-all__text">{{ t('todolist.checkAll') }}</span>
      <span>{{ done }} / {{ taskCount }}</span>
    </div>
  </div>
  <div class="empty-text" v-show="!hasTask">{{ t('todolist.emptyText') }}</div>
</div>
</template>

<style lang="scss" scoped>
.todolist {
  font-size: 14px;

  .typing-area {
    text-align: center;
    padding-top: 4px;

    .typing-input {
      width: 230px;
      height: 30px;
      outline: none;
      border: 1px solid var(--van-blue); 
      border-radius: 5px;
      text-indent: 1em;
      margin-right: 10px;
    }

    .typing-btn {
      width: 50px;
      height: 30px;
      outline: none;
      border: 1px solid var(--van-blue);
      border-radius: 5px;
      padding: 0;
      background-color: #fff;

      &:hover {
        background-color: var(--van-blue);
        color: #fff;
      }
    }
  }

  .task-list {
    width: 230px;
    margin: 10px auto;

    .task-item {
      height: 30px;

      .task-content {
        margin: 0 6px;
      }

      .is-completed {
        text-decoration: line-through;
      }
    }
  }

  .empty-text {
    margin: 10px auto;
    width: 230px;
  }

  .check-all {
    &__text {
      margin: 0 6px;
    }
  }
}
</style>
