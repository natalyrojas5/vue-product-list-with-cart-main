<template>
  <div class="my-cart__product">
    <p class="my-cart__productName">
      {{ productName }}
    </p>
    <div class="my-cart__productDescription">
      <span class="my-cart__productCount"> {{ productCount }}x </span>
      <span class="my-cart__productPrice"> @ ${{ productPrice }} </span>
      <span class="my-cart__productPriceTotal">
        ${{ (productPrice * productCount).toFixed(2) }}
      </span>
    </div>
    <div class="my-cart__productDelete" @click="handleRemoveProductInCart">
      <img src="/icons/icon-remove-item.svg" alt="Icon Cart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MyProduct } from '@/interfaces/product'
import { useMyCartStore } from '@/stores/my-cart'

const props = defineProps<MyProduct>()

const store = useMyCartStore()

const handleRemoveProductInCart = () => {
  store.removeProductInCart(props.productName)
}
</script>
