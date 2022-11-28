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
    <div sm="container max-w-screen-sm" lg="container w-full max-w-screen min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row justify-center min-h-screen overflow-hidden mx-auto px-5 sm="py-20" lg="py-24">
        <div col-6 py-10>
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
