<!--
 * @Author: Simon
 * @Date: 2022-04-04 15:06:20
 * @LastEditTime: 2022-04-04 15:06:22
 * @FilePath: \shareDom\src\pages\bar.vue
-->
<!--
 * @Author: Simon
 * @Date: 2022-04-03 12:33:29
 * @LastEditTime: 2022-04-04 14:52:20
 * @FilePath: \shareDom\src\pages\foo.vue
-->
<script setup lang="ts">
import type { StyleValue } from 'vue'
import { ImageProxy } from '../composables/image'

const size = $(useStorage('size', 100))
function enlarge() {
  size += 20
}
function reset() {
  size = 100
}
const style = computed((): StyleValue => ({
  width: `${size}px`,
  height: `${size}px`,
}))
</script>
<template>
  <div flex="~ col" items-center>
    <div>Bar</div>
    <div>
      <router-link m-3 text-sm btn to="/">
        Back
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
