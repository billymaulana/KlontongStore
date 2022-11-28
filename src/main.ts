import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import Toast from 'vue-toastification'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'vue-toastification/dist/index.css'
import './assets/styles/main.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toast, {
  timeout: 1000,
})
app.mount('#app')
