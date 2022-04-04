<!--
 * @Author: Simon
 * @Date: 2022-04-02 13:13:23
 * @LastEditTime: 2022-04-04 14:53:03
 * @FilePath: \shareDom\src\App.vue
-->
<script setup lang="ts">
import { ImageContainer } from './composables/image'
</script>
<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
    <ImageContainer />
  </main>
</template>
