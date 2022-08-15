<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 15:23:23
 * @Description: 
-->
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '../stores/search';

const router = useRouter();
const store = useSearchStore();
const { searchVal } = storeToRefs(store);
const { search } = store;
function handleSearch(val, event) {
  search(val, () => {
    router.push('/goodsList');
  });
}

function handleClickLeft() {
  router.back();
}
</script>

<template>
  <nut-searchbar v-model="searchVal" clearable autofocus @search="handleSearch">
    <template v-slot:leftout>
      <nut-icon @click="handleClickLeft" size="20" name="left"></nut-icon>
    </template>
    <template v-slot:leftin>
      <nut-icon size="14" name="search2"></nut-icon>
    </template>
    <template v-slot:rightout>
      <nut-button @click="handleSearch" type="danger" size="small"
        >搜索</nut-button
      >
    </template>
  </nut-searchbar>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
