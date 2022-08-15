<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 16:33:47
 * @Description: 
-->
<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

import axios from 'axios';

onMounted(() => {
  axios
    .get(`/api/getUsers`)
    .then((res) => {
      console.log('测试接口users', res);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
