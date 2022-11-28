<!-- eslint-disable no-console -->
<script setup lang="ts">
const router = useRouter()
const productStore = useProductStore()
const { listProducts, listfilterProducts } = storeToRefs(productStore)
const paginationData = reactive({
  firstPage: 1,
  back: 1,
  page: 1,
  next: 2,
  lastPage: 10,
  limit: 10,
})
const fetchPagination = async () => {
  await productStore.fetchAllProducts(paginationData.page, paginationData.limit)
}

onMounted(() => {
  fetchPagination()
})

const search = ref('')
const searchProduct = useDebounceFn(async () => {
  if (search.value.length > 0)
    await productStore.filterProducts(search.value.toLocaleLowerCase())
}, 500)
const newProduct = () => {
  router.push('/product/new-product')
}

// pagination
const paginationFirst = () => {
  paginationData.page = 1
  fetchPagination()
}
const paginationLast = () => {
  paginationData.page = 10
  fetchPagination()
}
const paginationNext = () => {
  if (paginationData.page === 10) {
    paginationData.page = 10
    fetchPagination()
  }
  else {
    paginationData.page += 1
    fetchPagination()
  }
}
const paginationBack = () => {
  if (paginationData.page === 1 || paginationData.page === 0) {
    paginationData.page = 1
    fetchPagination()
  }
  else {
    paginationData.page = paginationData.page - 1
    fetchPagination()
  }
}
</script>

<template>
  <section v-if="listProducts || listfilterProducts">
    <div lg="container w-full min-h-screen h-full overflow-hidden" text="text-black dark:text-gray-200">
      <div row justfy-center min-h-screen overflow-hidden mx-auto sm="py-24 px-5" lg="py-24 px-20">
        <div w-full lg="flex justify-between">
          <div class="pb-4 bg-white dark:bg-gray-900">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>
              </div>
              <input id="table-search" v-model="search" type="text" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" @keyup="searchProduct" @change="searchProduct">
            </div>
          </div>
          <a btn-primary w-auto f-14 px-5 cursor-pointer @click="newProduct">
            <i i-mdi:plus inline-flex f-14 mr-2 />Add Product
          </a>
        </div>
        <TableProduct :products="search.length > 0 ? listfilterProducts : listProducts" />
        <div flex items-center lg="justify-end" sm="justify-center" w-full mt-5>
          <button flex items-center px-3 :disabled="paginationData.page === 1" @click="paginationFirst">
            <i f-20 inline-flex i-mdi:chevron-double-left />
          </button>
          <button flex items-center px-3 :disabled="paginationData.page === 1" @click="paginationBack">
            <i f-20 inline-flex i-mdi:chevron-left />
          </button>
          <div px-5 font-bold>
            {{ paginationData.page }}
          </div>
          <button flex items-center px-3 :disabled="paginationData.page === 10" @click="paginationNext">
            <i f-20 inline-flex i-mdi:chevron-right />
          </button>
          <button flex items-center px-3 :disabled="paginationData.page === 10" @click="paginationLast">
            <i f-20 inline-flex i-mdi:chevron-double-right />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
