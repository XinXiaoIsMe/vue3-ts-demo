<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Lang } from '../lang/index'

const { t } = useI18n({ useScope: 'global' })
const activeTab = ref('home')
const { locale } = useI18n({ useScope: 'global' })

const changeLang = (): void => {
  locale.value = locale.value === Lang.ENGLISH ? Lang.CHINESE : Lang.ENGLISH
}
const lang = computed(() => locale.value === Lang.ENGLISH ? '英' : '中')
</script>

<template>
<div>
  <div class="header">
    <h1>Vue3 Demo</h1>
    <span @click="changeLang" class="lang">{{ lang }}</span>
  </div>
  <router-view />
  <van-tabbar v-model="activeTab" route>
    <van-tabbar-item name="home" to="/home" icon="home-o">{{ t('app.home') }}</van-tabbar-item>
    <van-tabbar-item name="task" to="/task" icon="calendar-o">{{ t('app.task') }}</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #ccc;
  text-align: center;

  .lang {
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
  }
}
</style>
