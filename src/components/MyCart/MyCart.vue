<template>
  <aside class="my-cart">
    <MyCartHeader :productsCount="cantProducts" />
    <MyCartEmpty v-if="emptyProducts" />
    <MyCartProduct
      v-for="product in products"
      :key="product.productName"
      :productName="product.productName"
      :productCount="product.productCount"
      :productPrice="product.productPrice"
      :productImage="product.productImage"
    />
    <MyCartProductsTotal v-if="existsProducts" />
    <MyCartDelivery v-if="existsProducts" />
    <MyCartOrderConfirm v-if="existsProducts" />
  </aside>
</template>
<script setup lang="ts">
import MyCartHeader from './MyCartHeader.vue'
import MyCartEmpty from './MyCartEmpty.vue'
import MyCartProduct from './MyCartProduct.vue'
import MyCartProductsTotal from './MyCartProductsTotalPrice.vue'
import MyCartDelivery from './MyCartDelivery.vue'
import MyCartOrderConfirm from './MyCartOrderConfirm.vue'
import { useMyCartStore } from '../../stores/my-cart'
import { computed } from 'vue'

const store = useMyCartStore()

const products = computed(() => store.products)
const existsProducts = computed(() => store.products.length > 0)
const emptyProducts = computed(() => store.products.length == 0)
const cantProducts = computed(() => store.products.length)
</script>
