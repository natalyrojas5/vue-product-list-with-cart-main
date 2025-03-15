import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref<boolean>(false)

  const changeModalState = (isOpenModal: boolean) => {
    isOpen.value = isOpenModal
  }

  return { isOpen, changeModalState }
})
