<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="box">use sass</div>
    <div class="text-red">test UnoCSS</div>
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
