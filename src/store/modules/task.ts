import { defineStore } from 'pinia'

export const taskStore = defineStore('task', {
  state: () => ({
    tasks: []
  })
})
