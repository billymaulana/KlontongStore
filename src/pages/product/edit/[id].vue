import type { IProduct from '~/types';
<script setup lang="ts">
const productStore = useProductStore()
const { id } = useRoute().params

const productData = ref({
  name: '',
  sku: '',
  categoryName: '',
  image: '',
  price: '',
  description: '',
  width: 0,
  length: 0,
  weight: 0,
  categoryId: 0,
})

onMounted(async () => {
  if (typeof id === 'string')
    productData.value = await productStore.fetchProduct(id)
})

const disableSubmit = computed(() => {
  if (
    productData.value.name === '' || productData.value.name.trim().length === 0
    || productData.value.sku === '' || productData.value.sku.trim().length === 0
    || productData.value.categoryName === '' || productData.value.categoryName.trim().length === 0
    || productData.value.image === '' || productData.value.image.trim().length === 0
    || productData.value.price === '' || !productData.value.width || !productData.value.length
    || !productData.value.weight || !productData.value.categoryId
  )
    return true
  else
    return false
})
const submitUpdateProduct = async () => {
  if (disableSubmit.value === false && (typeof id === 'string'))
    await productStore.updateProduct(productData.value, parseInt(id))
}
</script>

<template>
  <section>
    <div sm="container max-w-screen-sm" lg="container w-full min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row justify-center min-h-screen overflow-hidden mx-auto px-5 sm="py-20" lg="py-24">
        <div col-12>
          <a href="/" flex item-center pb-5 pl-0>
            <i i-mdi:arrow-left text-gray text-20px self-center />
            <span font-bold>Back</span>
          </a>
          <h1 f-28 font-bold>
            Add Product
          </h1>
          <form w-full mx-auto block mt-5 @submit.prevent="submitUpdateProduct">
            <div class="mb-5">
              <label>Product Name</label>
              <input v-model="productData.name" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Product description</label>
              <textarea v-model="productData.description" class="form-control h-full" type="text" cols="5" rows="5" />
            </div>
            <div class="mb-5">
              <label>Product Image: URL</label>
              <input v-model="productData.image" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Product Price:</label>
              <input v-model="productData.price" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Product Width:</label>
              <input v-model="productData.width" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>Product length:</label>
              <input v-model="productData.length" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>Product Weight:</label>
              <input v-model="productData.weight" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>SKU Code</label>
              <input v-model="productData.sku" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Category Id:</label>
              <input v-model.number="productData.categoryId" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>Category Name:</label>
              <input v-model.number="productData.categoryName" class="form-control" type="text">
            </div>
            <button type="submit" btn-primary mt-5 :disabled="disableSubmit" :class="disableSubmit ? 'text-gray' : 'text-white'">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
