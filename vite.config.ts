import { URL, fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/assets/styles/scss/variables.scss' as *;
          `,
      },
    },
  },
  plugins: [
    vue(),
    eslint(),
    UnoCSS({}),
    Components({ dts: true }),
    AutoImport({ imports: ['vue', 'vue-router', 'pinia'], dts: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5000,
  },
})
