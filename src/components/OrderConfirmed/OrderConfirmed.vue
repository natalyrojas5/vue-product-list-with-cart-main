<template>
  <div class="order-confirmed" v-if="isOpen">
    <div class="order-confirmed__content">
      <img src="/icons/icon-order-confirmed.svg" alt="Icon Confirmed" />
      <h1 class="order-confirmed__contentTitle">Order Confirmed</h1>
      <p class="order-confirmed__contentSubtitle">We hope you enjoy your food!</p>

      <OrderConfirmedProducts />
      <button class="order-confirmed__contentBtnStart" @click="handleStartNewOrder">
        Start New Order
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import OrderConfirmedProducts from './OrderConfirmedProducts.vue'
import { useModalStore } from '@/stores/modal'
import { useMyCartStore } from '@/stores/my-cart'

const storeModal = useModalStore()
const storeProducts = useMyCartStore()

const isOpen = computed(() => storeModal.isOpen)

const handleStartNewOrder = () => {
  storeModal.changeModalState(false)
  storeProducts.clearProductInCart()
}
</script>
