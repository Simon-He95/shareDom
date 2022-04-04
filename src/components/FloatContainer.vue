<!--
 * @Author: Simon
 * @Date: 2022-04-03 15:34:29
 * @LastEditTime: 2022-04-04 14:13:16
 * @FilePath: \shareDom\src\components\FloatContainer.vue
-->
<script setup lang="ts">
import type { StyleValue } from 'vue'
import { metadata, proxyEl } from '../composables/floating'
const rect = $ref<DOMRect | undefined>()
function update() {
  rect = useElementBounding(proxyEl)
}

const style = computed((): StyleValue => ({
  transition: 'all 0.1s',
  position: 'fixed',
  top: `${rect?.top ?? 0}px`,
  left: `${rect?.left ?? 0}px`,
}))
watchEffect(update)
useEventListener('resize', update)
</script>

<template>
  <div :style="style">
    <slot :attrs="metadata.attrs" />
  </div>
</template>

<style scoped>
</style>
