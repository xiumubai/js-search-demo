<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 11:41:51
 * @Description: 
-->
<script setup>
import { RouterView } from 'vue-router';
import SearchHeader from '@/components/SearchHeader.vue';
</script>

<template>
  <header>
    <search-header></search-header>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
