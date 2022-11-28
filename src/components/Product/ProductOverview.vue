<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div v-if="product" overview w-full>
    <div>
      <img :src="product.image" width="280" height="300" w-280px h-300px object-contain mx-auto rounded-md lg="my-10" alt="Product Images">
    </div>
    <div>
      <h1 font-medium text-gray>
        {{ product.name }}
      </h1>
      <h2 font-bold f-32 text-black mb-4>
        Rp.{{ product.price }}
      </h2>
      <p mb-4>
        {{ product.description }}
      </p>
      <div>
        <p>Category: {{ product.categoryName }}</p>
        <p>SKU Code: {{ product.sku }}</p>
        <p>width: {{ product.width }}</p>
        <p>weight: {{ product.weight }}</p>
        <p>length: {{ product.length }}</p>
      </div>
    </div>
  </div>
</template>
