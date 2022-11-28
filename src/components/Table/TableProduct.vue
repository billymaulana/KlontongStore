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
  <div
    class="overflow-x-auto relative w-full"
  >
    <table class="w-full text-sm text-left text-gray-500 shadow-md sm:rounded-lg dark:text-gray-400 mt-5">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Product ID
          </th>
          <th scope="col" class="py-3 px-6">
            Product Name
          </th>
          <th scope="col" class="py-3 px-6">
            SKU Code
          </th>
          <th scope="col" class="py-3 px-6">
            Category
          </th>
          <th scope="col" class="py-3 px-6">
            Price
          </th>
          <th scope="col" class="py-3 px-6">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="props?.products?.length === 0">
          <th colspan="6" class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap text-center dark:text-white">
            No Data
          </th>
        </tr>
        <tr v-for="(item, id) in props?.products" :key="id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ item.id }}
          </th>
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div flex items-center>
              <img :src="item?.image" alt="Img-Product" width="40" height="40" w-40px h-40px mr-2 object-contain>
              <div>
                {{ item?.name }}
              </div>
            </div>
          </th>
          <td class="py-4 px-6">
            {{ item?.sku }}
          </td>
          <td class="py-4 px-6">
            {{ item?.categoryName }}
          </td>
          <td class="py-4 px-6">
            ${{ item?.price }}
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

  <!-- <div v-for="(product, id) in props.products" :key="id" sm="col-12" md="col-6 flex grow-1" lg="col-3 flex grow-1">
      <a w-full my-3 mx-2 p-4 flex flex-col justify-between shadow-md rounded-4 dark="bg-darksecondary">
        <div>
          <img :src="product.image" loading="lazy" width="200" height="200" w-200px h-200px object-contain mx-auto sm="my-5" lg="my-10" alt="Product Images">
          <div class="max-w-[80%] font-bold" text-gray>
            {{ product.title }}
          </div>
          <div font-extrabold f-26 my-1>
            ${{ product.price }}
          </div>
          <div f-10 capitalize my-1 rounded-4 bg-lightgray text="gray" text-center px-2 py-1 whitespace-nowrap inline-flex>
            {{ product.category }}
          </div>
        </div>
        <div py-2>
          <div justify-between flex items-center f-14 text-gray>
            <div flex items-center>
              <div inline-flex mr-1>
                <i i-mdi:package-variant-closed text-gray inline-flex />
                <span f-14 text-gray ml-1>{{ product.rating?.count }}</span>
              </div>
              <div inline-flex>
                <i i-mdi:star bg-yellow inline-flex f-18 />
                <span f-14 text-gray ml-1>{{ product.rating?.rate }}</span>
              </div>
            </div>
            <button text-white bg-dark py-1 px-4 rounded-4 f-14 flex items-center @click="addCart(product)">
              <i i-mdi-cart-plus inline-flex /><span ml-1 font-bold />Add Cart
            </button>
          </div>
        </div>
      </a>
    </div> -->
</template>
