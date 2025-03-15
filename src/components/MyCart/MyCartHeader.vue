<template>
  <h2 class="my-cart__title">You Cart ({{ productsCount }})</h2>
</template>

<script setup lang="ts">
import type { MyCartProductCount } from '@/interfaces/product'

defineProps<MyCartProductCount>()
</script>
