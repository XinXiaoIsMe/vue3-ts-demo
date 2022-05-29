import { createI18n } from 'vue-i18n'
import enLang from './en'
import zhLang from './zh-cn'
import { Lang } from '@/types/lang'
import { localStorage } from '@/utils/storage'

export const messages = {
  [Lang.ENGLISH]: { ...enLang },
  [Lang.CHINESE]: { ...zhLang }
}

function useLocaleLang (): Lang {
  // 本地缓存获取
  let language = localStorage.get('language')
  if (language) {
    return language
  }
  // 浏览器使用语言
  language = navigator.language.toLowerCase()
  const locales = Object.keys(messages) as Lang[]
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return Lang.CHINESE
}

export const i18n = createI18n({
  messages,
  legacy: false,
  locale: useLocaleLang()
})
