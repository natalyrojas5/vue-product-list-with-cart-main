export interface Product {
  productImage: string
  productCategory: string
  productName: string
  productPrice: number
}

export interface MyProduct extends Omit<Product, 'productCategory'> {
  productCount: number
}

export interface MyCartProductCount {
  productsCount: number
}
