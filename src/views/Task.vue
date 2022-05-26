<script setup lang="ts">
import Todolist from '@/components/Todolist.vue'

interface ITask {
  id: number
  content: string
  completed: boolean
}

const addTask = (task: ITask): void => {
  console.log(task)
}
</script>

<template>
<div class="task">
  <Todolist :taskList="[]" @add="addTask" />
</div>
</template>

<style>

</style>
