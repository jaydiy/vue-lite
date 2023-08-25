<script setup lang="ts">
import { computed } from 'vue'
import { isExternal } from '@/utils/methods'

const props = defineProps<{ iconName: string; className?: string }>()
// 是否是带协议的图片链接
const isExt = computed(() => isExternal(props.iconName ?? ''))
// 拼接成 symbolId 在 loader 配置中指定了 symbolId 格式 icon-图标名称
const svgName = computed(() => `#icon-${props.iconName}`)
// 添加类名 props.className 外部传入自定义类名
const svgClass = computed(() =>
  props.className !== null ? `svg-icon ${props.className}` : 'svg-icon'
)
// 如果 iconName 是带协议的图标链接 则通过 style css属性方式渲染
const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconName}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.iconName}) no-repeat 50% 50%`,
}))
</script>

<template>
  <!-- 如果 iconName 是带协议的图标链接 则通过 style 属性方式渲染 -->
  <div
    v-if="isExt"
    class="svg-icon svg-external-icon"
    :style="styleExternalIcon"
    v-bind="$attrs"
  ></div>
  <!-- SVG icon 通过名称使用 -->
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="svgName" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentcolor;
}

.svg-external-icon {
  display: inline-block;
  background-color: currentcolor;
  mask-size: cover !important;
}
</style>
