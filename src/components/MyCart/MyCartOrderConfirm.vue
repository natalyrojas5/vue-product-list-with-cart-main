<template>
  <button class="my-cart__confirmOrder" @click="handleChangeModalState">Confirmar Order</button>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const store = useModalStore()

const handleChangeModalState = () => {
  store.changeModalState(true)
}
</script>
