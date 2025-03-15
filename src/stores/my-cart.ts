import type { MyProduct } from '@/interfaces/product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyCartStore = defineStore('myCart', () => {
  const products = ref<MyProduct[]>([])

  const addProductToCart = (product: MyProduct) => {
    products.value.push(product)
  }

  const foundProductCountInCart = (productName: string): MyProduct => {
    return products.value.find((product) => product.productName === productName) as MyProduct
  }

  const existProductInCart = (productName: string) => {
    return products.value.some((product) => product.productName === productName)
  }

  const incrementProductInCart = (productName: string) => {
    const product = products.value.find((product) => product.productName === productName)
    if (!product) return
    product.productCount++
  }

  const decrementProductInCart = (productName: string) => {
    const product = products.value.find((product) => product.productName === productName)
    if (!product) return

    if (product.productCount === 1) {
      removeProductInCart(productName)
      return
    }

    product.productCount--
  }

  const removeProductInCart = (productName: string) => {
    const newProducts = products.value.filter((product) => product.productName !== productName)
    products.value = newProducts
  }

  const clearProductInCart = () => {
    products.value = []
  }

  return {
    products,
    addProductToCart,
    existProductInCart,
    removeProductInCart,
    incrementProductInCart,
    decrementProductInCart,
    foundProductCountInCart,
    clearProductInCart,
  }
})
