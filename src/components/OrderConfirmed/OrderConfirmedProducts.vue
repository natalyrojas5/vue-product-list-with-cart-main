<template>
  <div class="order-confirmed__products">
    <OrderConfirmedProduct
      v-for="product in products"
      :key="product.productName"
      :productName="product.productName"
      :productCount="product.productCount"
      :productPrice="product.productPrice"
      :productImage="product.productImage"
    />
    <OrderConfirmerProductTotalPrice />
  </div>
</template>

<script setup lang="ts">
import { useMyCartStore } from '@/stores/my-cart'
import OrderConfirmedProduct from './OrderConfirmedProduct.vue'
import OrderConfirmerProductTotalPrice from './OrderConfirmedProductsTotalPrice.vue'
import { computed } from 'vue'

const store = useMyCartStore()

const products = computed(() => store.products)
</script>
