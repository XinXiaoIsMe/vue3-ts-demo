<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Lang } from '@/types/lang'
import { localStorage } from '@/utils/storage'
import SvgIcon from '../SvgIcon/index.vue'

interface LangText {
  text: 'English' | '中'
}

const showPopover = ref(false)
const langs = ref<LangText[]>([
  { text: 'English' },
  { text: '中' }
])
const { locale } = useI18n({ useScope: 'global' })
const onSelect = (lang: LangText): void => {
  locale.value = lang.text === 'English' ? Lang.ENGLISH : Lang.CHINESE
  localStorage.set('language', locale.value)
}
</script>

<template>
<van-popover v-model:show="showPopover" :actions="langs" @select="onSelect" placement="bottom-end" class="lang-select">
  <template #reference>
    <SvgIcon icon-class="language" class="lang-icon" color="#fff"></SvgIcon>
  </template>
</van-popover>
</template>

<style lang="scss" scoped>
.lang-icon {
  width: 30PX;
  height: 30PX;
}
</style>
