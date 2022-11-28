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
    <div sm="container max-w-screen-sm" lg="container w-full max-w-screen min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row justify-center min-h-screen overflow-hidden mx-auto px-5 sm="py-20" lg="py-24">
        <div col-6 py-10>
          <a href="/" flex item-center pb-5 pl-0>
            <i i-mdi:arrow-left text-gray text-20px self-center />
            <span font-bold>Back</span>
          </a>
          <h1 f-28 font-bold>
            Add Product
          </h1>
          <form w-full mx-auto block mt-10 @submit.prevent="submitNewProduct">
            <div class="mb-5">
              <label font-medium text-black>Product Name</label>
              <input v-model="product.name" class="form-control" type="text" placeholder="Product Name">
            </div>
            <div class="mb-5">
              <label font-medium text-black>Product description</label>
              <textarea v-model="product.description" class="form-control h-full" type="text" cols="5" rows="10" placeholder="Description" />
            </div>
            <div class="mb-5">
              <label font-medium text-black>URL Image:</label>
              <input v-model="product.image" class="form-control" type="text" placeholder="URL Images">
            </div>
            <div class="mb-5">
              <label font-medium text-black>Product Price:</label>
              <input v-model="product.price" class="form-control" type="text">
            </div>
            <div class="mb-5">
              <label font-medium text-black>Product Width:</label>
              <input v-model="product.width" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label font-medium text-black>Product length:</label>
              <input v-model="product.length" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label font-medium text-black>Product Weight:</label>
              <input v-model="product.weight" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label font-medium text-black>SKU Code</label>
              <input v-model="product.sku" class="form-control" type="text" placeholder="SKU Code">
            </div>
            <div class="mb-5">
              <label font-medium text-black>Category Id:</label>
              <input v-model.number="product.categoryId" class="form-control" type="number">
            </div>
            <div class="mb-5">
              <label font-medium text-black>Category Name:</label>
              <input v-model.number="product.categoryName" class="form-control" type="text" placeholder="Category Name">
            </div>
            <button type="submit" btn-primary mt-10 :disabled="disableSubmit" :class="disableSubmit ? 'text-gray' : 'text-white'">
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
