<!--
 * @Author: Simon
 * @Date: 2022-04-03 12:39:11
 * @LastEditTime: 2022-04-04 14:23:45
 * @FilePath: \shareDom\src\components\MyImage.vue
-->
<script setup lang="ts">
const props = defineProps<{}>()
const a = $ref<boolean>(false)
</script>

<template>
  <div overflow-hidden transition-all @click="a = !a">
    <img v-if="a" object-cover w-full h-full block src="https://images.unsplash.com/photo-1648852082984-cdd0f27e0b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="">
    <img v-else object-cover w-full h-full block src="https://images.unsplash.com/photo-1644971023449-f2d756599587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
  </div>
</template>

<style scoped>
</style>
