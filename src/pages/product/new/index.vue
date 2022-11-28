<!-- eslint-disable no-console -->
<script setup lang="ts">
const productStore = useProductStore()
const product = ref({
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

const disableSubmit = computed(() => {
  if (
    product.value.name === '' || product.value.name.trim().length === 0
    || product.value.sku === '' || product.value.sku.trim().length === 0
    || product.value.categoryName === '' || product.value.categoryName.trim().length === 0
    || product.value.image === '' || product.value.image.trim().length === 0
    || product.value.price === '' || product.value.price.trim().length === 0
    || !product.value.width || !product.value.length
    || !product.value.weight || !product.value.categoryId
  )
    return true
  else
    return false
})
const submitNewProduct = async () => {
  if (disableSubmit.value === false)
    await productStore.addProduct(product.value)
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
          <h1 font-bold>
            Add Product
          </h1>
          <form w-full mx-auto block mt-10 @submit.prevent="submitNewProduct">
            <div class="mb-5">
              <label>Product Name</label>
              <input v-model="product.name" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Product description</label>
              <textarea v-model="product.description" class="form-control h-full" type="text" cols="5" rows="10" />
            </div>
            <div class="mb-5">
              <label>Product Image: URL</label>
              <input v-model="product.image" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Product Price:</label>
              <input v-model="product.price" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Product Width:</label>
              <input v-model="product.width" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>Product length:</label>
              <input v-model="product.length" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>Product Weight:</label>
              <input v-model="product.weight" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>SKU Code</label>
              <input v-model="product.sku" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label>Category Id:</label>
              <input v-model.number="product.categoryId" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label>Category Name:</label>
              <input v-model.number="product.categoryName" class="form-control" type="text">
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
