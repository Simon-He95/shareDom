<!--
 * @Author: Simon
 * @Date: 2022-04-02 13:13:23
 * @LastEditTime: 2022-04-04 15:07:35
 * @FilePath: \shareDom\src\pages\index.vue
-->

<script setup lang="ts">
import { ImageProxy } from '../composables/image'
const mode = ref<boolean>(false)
const toggle = useToggle(mode)
</script>

<template>
  <div>Index</div>
  <div>
    <router-link m-3 text-sm btn to="/foo">
      Foo
    </router-link>
    <router-link m-3 text-sm btn to="/bar">
      Bar
    </router-link>
    <button btn @click="toggle()">
      Toggle
    </button>
  </div>
  <ImageProxy :class="mode? 'w-50 h-50': 'w-60 h-30'" rounded-xl />
</template>
