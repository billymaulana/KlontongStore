/* eslint-disable no-console */
import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IProduct } from 'types'

export const useProductStore = defineStore('product', {
  state: () => ({
    listProducts: [],
    product: null,
    listfilterProducts: [],
    isLoading: true,
    errorMessage: '',
  } as unknown as State),

  actions: {
    async fetchAllProducts(page: number, limit: number) {
      const response = await useMyFetch<IProduct>(`/products?page=${page}&limit=${limit}&order=desc`)
      this.listProducts = await response
      this.isLoading = false
      localStorage.setItem('list_products', JSON.stringify(response))
      return response
    },
    async fetchProduct(id: string) {
      const response = await useMyFetch<IProduct>(`/products/${id}`)
      this.product = await response
      this.isLoading = false
      return response
    },
    async deleteProduct(id: string) {
      try {
        const response = await useMyFetch<IProduct>(`/products/${id}`, {
          method: 'DELETE',
        })
        const success = await response
        if (success) {
          toast.success('Success Deleted Product', {
            timeout: 1000,
            onClose() {
              window.location.reload()
            },
          })
        }
      }
      catch (e) {
        console.log(e)
        toast.error('Failed Deleted Product')
      }
    },
    async addProduct(payload: object) {
      try {
        const response = await useMyFetch<IProduct>('/products', {
          method: 'POST',
          body: {
            ...payload,
          },
        })
        const success = await response
        console.log(response)
        if (success) {
          toast.success('Success Add Product', {
            timeout: 1000,
            onClose() {
              window.location.replace('/')
            },
          })
        }
      }
      catch (e) {
        console.log(e)
        toast.error('Failed Deleted Product')
      }
    },
    async updateProduct(payload: object, id: number) {
      try {
        const response = await useMyFetch<IProduct>(`/products/${id}`, {
          method: 'PUT',
          body: {
            ...payload,
          },
        })
        const success = await response
        if (success) {
          toast.success('Success Edit Product', {
            timeout: 1000,
            onClose() {
              window.location.replace('/')
            },
          })
        }
      }
      catch (e) {
        console.log(e)
        toast.error('Failed Deleted Product')
      }
    },
    async filterProducts(productname: string) {
      this.isLoading = true
      const response = await useMyFetch<IProduct>(`/products?name=${productname}`)
      this.listfilterProducts = await response
      this.isLoading = false
      localStorage.setItem('list_products', JSON.stringify(response))
      return response
    },
  },

  getters: {
  },
})

interface State {
  listProducts: IProduct
  listfilterProducts: IProduct
  product: IProduct
  errorMessage: string
  isLoading: boolean
}

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
