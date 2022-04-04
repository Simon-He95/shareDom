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
    <div>Foo</div>
    <div>
      <router-link m-3 text-sm btn to="/">
        Back
      </router-link>
      <button btn @click="enlarge()">
        Enlarge
      </button>
      <button m-3 btn @click="reset()">
        Reset
      </button>
    </div>

    <div m10 flex="~ col sm:row gap-4" items-center>
      <ImageProxy :style="style" rounded="1/2" />
      <p flex-1>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
