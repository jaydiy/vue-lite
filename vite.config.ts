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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
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
    Components({
      dts: true, // 'components.d.ts'
      resolvers: [
        // ElementPlusResolver()
      ],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true, // 'auto-imports.d.ts'
      resolvers: [
        // ElementPlusResolver()
      ],
    }),
    // 注册所有的 svg 文件生成 svg 精灵图
    createSvgIconsPlugin({
      // eslint-disable-next-line n/prefer-global/process
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')], // icon 存放的目录
      symbolId: 'icon-[name]', // symbol 的 id
      inject: 'body-last', // 插入的位置
      customDomId: '__svg__icons__dom__', // svg 的 id
    }),
  ],
  server: {
    port: 5100,
    // cors: true, // 跨域设置允许
    // 接口代理
    // proxy: {
    //   '/api': {
    //     // 本地 8000 前端代码的接口 代理到 8888 的服务端口
    //     target: 'http://localhost:8888/',
    //     changeOrigin: true, // 允许跨域
    //     rewrite: (path) => path.replace('/api/', '/'),
    //   },
    // },
  },
})
