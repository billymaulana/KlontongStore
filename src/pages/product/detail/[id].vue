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
    <div sm="container max-w-screen-sm" lg="container w-full min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row justfy-center min-h-screen overflow-hidden mx-auto sm="py-20" lg="py-24">
        <div sm="col-12 py-10" lg="items-center col-6 mx-auto">
          <a href="/" flex item-center>
            <i i-mdi:arrow-left text-gray text-20px self-center />
            <span font-bold>Back</span>
          </a>
          <ProductOverview v-if="product" :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
  </route>
