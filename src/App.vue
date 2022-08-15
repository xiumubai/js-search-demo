<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:05:38
 * @Description: 
-->
<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import SearchHeader from '@/components/SearchHeader.vue';

import axios from 'axios';

onMounted(() => {
  console.log(`the component is now mounted.`);
  axios
    .get(`/api/getUsers`)
    .then((res) => {
      // users.value = res.data.data;
      console.log('users', res);
    })
    .catch((err) => {
      console.log(err);
    });
});
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
