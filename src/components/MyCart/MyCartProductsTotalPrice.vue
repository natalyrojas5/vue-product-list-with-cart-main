<template>
  <div class="my-cart__productsTotal">
    <p class="my-cart__productsTotalText">Order total</p>
    <p class="my-cart__productsTotalPrice">$ {{ totalPrice }}</p>
  </div>
</template>

<script setup lang="ts">
import { useMyCartStore } from '@/stores/my-cart'
import { computed } from 'vue'

const store = useMyCartStore()
const totalPrice = computed(() => {
  return store.products.reduce((sum, product) => {
    return sum + (product.productCount || 0) * product.productPrice
  }, 0)
})
</script>
