import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => ({
    version: '1.1.0',
    username: ''
  }),
  actions: {
    setUsername (username: string) {
      this.username = username
    }
  }
})