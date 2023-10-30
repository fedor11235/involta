import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculatorStore', () => {
  const isActive = ref(false)

  return { isActive }
})