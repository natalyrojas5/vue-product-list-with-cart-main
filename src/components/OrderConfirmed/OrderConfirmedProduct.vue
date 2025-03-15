<template>
  <div class="order-confirmed__product">
    <div class="order-confirmed__productImage">
      <img :src="productImage" :alt="productName" />
    </div>
    <div class="order-confirmed__productDescription">
      <p class="order-confirmed__productDescriptionName">{{ productName }}</p>
      <div class="order-confirmed__productDescriptionExtra">
        <span class="order-confirmed__productDescriptionExtraCount">{{ productCount }}x </span>
        <span class="order-confirmed__productDescriptionExtraPrice">
          @${{ productPrice.toFixed(2) }}
        </span>
      </div>
      <span class="order-confirmed__productPriceTotal">
        ${{ (productPrice * productCount).toFixed(2) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MyProduct } from '@/interfaces/product'

const props = defineProps<MyProduct>()
</script>
