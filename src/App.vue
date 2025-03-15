<script setup lang="ts"></script>

<template>
  <Header />
  <MyCart />
  <Products />
  <OrderConfirmed />
</template>

<script setup lang="ts">
import Header from './components/Header/Header.vue'
import MyCart from './components/MyCart/MyCart.vue'
import Products from './components/Products/Products.vue'
import OrderConfirmed from './components/OrderConfirmed/OrderConfirmed.vue'
</script>
