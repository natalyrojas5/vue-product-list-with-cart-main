<template>
  <main class="products">
    <Product
      v-for="product in products"
      :key="product.name"
      :productName="product.name"
      :productCategory="product.category"
      :productPrice="product.price"
      :productImage="product.image.desktop"
    />
  </main>
</template>

<script setup lang="ts">
import products from '../../data/products'
import Product from '../Product/Product.vue'
</script>
