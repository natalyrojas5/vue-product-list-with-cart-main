<template>
  <div class="order-confirmed__productsTotal">
    <p class="order-confirmed__productsTotalText">Order total</p>
    <p class="order-confirmed__productsTotalPrice">$ {{ totalPrice }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMyCartStore } from '../../stores/my-cart'

const store = useMyCartStore()
const totalPrice = computed(() => {
  return store.products.reduce((sum, product) => {
    return sum + (product.productCount || 0) * product.productPrice
  }, 0)
})
</script>
