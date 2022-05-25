import { createI18n } from 'vue-i18n'
import enLang from './en'
import zhLang from './zh-cn'

export enum Lang {
  ENGLISH = 'en',
  CHINESE = 'zh-cn'
}

const messages = {
  [Lang.ENGLISH]: { ...enLang },
  [Lang.CHINESE]: { ...zhLang }
}

export const i18n = createI18n({
  messages,
  legacy: false,
  locale: 'zh-cn'
})
