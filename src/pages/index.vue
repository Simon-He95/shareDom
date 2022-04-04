<!--
 * @Author: Simon
 * @Date: 2022-04-02 13:13:23
 * @LastEditTime: 2022-04-04 14:18:29
 * @FilePath: \shareDom\src\pages\index.vue
-->

<script setup lang="ts">
const mode = ref<boolean>(false)
const toggle = useToggle(mode)
</script>

<template>
  <div>Index</div>
  <div>
    <router-link m-3 text-sm btn to="/foo">
      Go
    </router-link>
    <button btn @click="toggle()">
      Toggle
    </button>
  </div>
  <FloatProxy :class="mode? 'w-50 h-50': 'w-60 h-30'" rounded-xl />
</template>
