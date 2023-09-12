<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { $api } = getCurrentInstance()?.appContext.config.globalProperties
async function fetchData() {
  const res = await $api.demo.findPageWrap.post()
  console.log('🚀 ~ file: AboutView.vue:7 ~ fetchData ~ res:', res)
}
</script>

<template>
  <div class="about">
    <h1 class="text-red md:text-emerald">This is an about page</h1>
    <div class="box">use sass</div>
    <svg-icon icon-name="all"></svg-icon>
    <svg-icon icon-name="cert"></svg-icon>
    <div class="text-red" @click="fetchData()">test UnoCSS</div>
  </div>
</template>

<style lang="scss" module>
@media (width >= 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;

    .box {
      color: $d-color-mdred;
    }

    .logo {
      @apply h-6em p-1.5em text-red;
    }
  }
}
</style>
