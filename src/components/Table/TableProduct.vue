<script lang="ts" setup>
const props = defineProps({
  products: {
    type: Object,
  },
})
const router = useRouter()
const productStore = useProductStore()
const detailProduct = (id: string) => {
  router.push(`/product/detail/${id}`)
}
const editProduct = (id: string) => {
  router.push(`/product/edit/${id}`)
}
const handlingDelete = (id: string) => {
  productStore.deleteProduct(id)
}
</script>

<template>
  <div class="overflow-x-auto relative w-full">
    <table class="w-full text-sm text-left shadow-md mt-5">
      <thead class="text-xs uppercase bg-lightgray">
        <tr>
          <th scope="col" py-3 lg="px-6">
            ID
          </th>
          <th scope="col" py-3 lg="px-6">
            Product Name
          </th>
          <th scope="col" py-3 lg="px-6">
            SKU Code
          </th>
          <th scope="col" py-3 lg="px-6">
            Category
          </th>
          <th scope="col" py-3 lg="px-6">
            Price
          </th>
          <th scope="col" py-3 lg="px-6">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="props?.products?.length === 0">
          <td colspan="6" class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap text-center dark:text-white">
            <spinner />
          </td>
        </tr>
        <tr v-for="(item, id) in props?.products" :key="id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.id }}
          </td>
          <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div flex items-center>
              <img :src="item?.image" alt="Img-Product" width="40" height="40" w-40px h-40px mr-2 object-contain>
              <div>
                {{ item?.name }}
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            {{ item?.sku }}
          </td>
          <td class="py-4 px-6">
            {{ item?.categoryName }}
          </td>
          <td class="py-4 px-6">
            Rp.{{ item?.price }}
          </td>
          <td class="py-4 px-6">
            <a class="font-medium cursor-pointer mr-2 text-blue-600 dark:text-blue-500 hover:underline" @click="editProduct(item?.id)">Edit</a>
            <a class="font-medium cursor-pointer text-red dark:text-blue-500 hover:underline" px-4 @click="handlingDelete(item?.id)">Delete</a>
            <a class="font-medium cursor-pointer text-black dark:text-white hover:underline" @click="detailProduct(item?.id)">Details</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
