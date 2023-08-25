import { URL, fileURLToPath } from 'node:url'

import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

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
    // 注册所有的 svg 文件生成 svg 精灵图
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')], // icon 存放的目录
      symbolId: 'icon-[name]', // symbol 的 id
      inject: 'body-last', // 插入的位置
      customDomId: '__svg__icons__dom__', // svg 的 id
    }),
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
