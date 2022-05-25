import { appStore } from './modules/app'

export const useStore = () => ({
  app: appStore()
})