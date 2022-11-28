import type { IProduct from '~/types';
<script setup lang="ts">
const productStore = useProductStore()
const { id } = useRoute().params
const { product } = storeToRefs(productStore)
onMounted(async () => {
  if (typeof id === 'string')
    await productStore.fetchProduct(id)
})
</script>

<template>
  <section>
    <div sm="container max-w-screen-sm" lg="container max-w-[80%] w-full min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row justfy-center min-h-screen overflow-hidden px-20 mx-auto sm="py-20" lg="py-24">
        <ProductOverview v-if="product" :product="product" />
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
  </route>
