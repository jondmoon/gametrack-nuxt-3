import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', () => {
  const drawer = ref(true)

  return {
    drawer
  }
})