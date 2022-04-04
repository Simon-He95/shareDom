<!--
 * @Author: Simon
 * @Date: 2022-04-02 13:13:23
 * @LastEditTime: 2022-04-03 17:37:34
 * @FilePath: \shareDom\src\App.vue
-->
<script setup lang="ts">

</script>
<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
    <FloatContainer v-slot="props">
      <my-image v-bind="props.attrs" />
    </FloatContainer>
  </main>
</template>
