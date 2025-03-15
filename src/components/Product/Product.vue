<template>
  <div class="product">
    <div class="product__header">
      <img
        :src="productImage"
        :alt="productName"
        :class="{ product__imageSelect: handleExistProductInCart() }"
      />
      <button
        class="product__addToCart"
        @click="handleAddProductToCart"
        v-if="!handleExistProductInCart()"
      >
        <img src="/icons/icon-add-to-cart.svg" alt="Icon Cart" />
        <span>Add to Cart</span>
      </button>
      <div class="product__counter" v-else>
        <img
          src="/icons/icon-decrement-quantity.svg"
          alt="Icon Cart"
          @click="handleDecrementProductInCart"
        />
        <span>
          {{ handleFoundProductCountInCart().productCount }}
        </span>
        <img
          src="/icons/icon-increment-quantity.svg"
          alt="Icon Cart"
          @click="handleIncrementProductInCart"
        />
      </div>
    </div>
    <aside class="product__description">
      <h1 class="product__descriptionCategory">
        {{ productCategory }}
      </h1>
      <p class="product__descriptionName">
        {{ productName }}
      </p>
      <p class="product__descriptionPrice">${{ productPrice.toFixed(2) }}</p>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { useMyCartStore } from '@/stores/my-cart'
import type { Product } from '@/interfaces/product'

const props = defineProps<Product>()

const store = useMyCartStore()

const handleAddProductToCart = () => {
  const newProduct = {
    productName: props.productName,
    productPrice: props.productPrice,
    productImage: props.productImage,
    productCount: 1,
  }
  store.addProductToCart(newProduct)
}

const handleExistProductInCart = () => {
  return store.existProductInCart(props.productName)
}

const handleIncrementProductInCart = () => {
  store.incrementProductInCart(props.productName)
}

const handleDecrementProductInCart = () => {
  store.decrementProductInCart(props.productName)
}

const handleFoundProductCountInCart = () => {
  return store.foundProductCountInCart(props.productName)
}
</script>
