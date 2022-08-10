<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 16:05:49
 * @Description: 
-->
<script setup>
import { RouterView } from 'vue-router';
import SearchBar from './components/Searchbar.vue';
</script>

<template>
  <header>
    <search-bar></search-bar>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
