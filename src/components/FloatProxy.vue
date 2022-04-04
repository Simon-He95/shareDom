<!--
 * @Author: Simon
 * @Date: 2022-04-03 15:34:35
 * @LastEditTime: 2022-04-04 14:01:09
 * @FilePath: \shareDom\src\components\FloatProxy.vue
-->
<script setup lang="ts">
import { metadata, proxyEl } from '../composables/floating'
metadata.attrs = useAttrs()
const el = ref<HTMLElement>()
onMounted(() => {
  proxyEl.value = el.value
})
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>

<style scoped>
</style>
