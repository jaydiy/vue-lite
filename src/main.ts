import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import '@/assets/styles/scss/index.scss'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
