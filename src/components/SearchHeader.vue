<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 18:34:20
 * @Description: 搜索组件
-->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@/stores/search';
import { useGoodsStore } from '@/stores/goods';
const router = useRouter();
const store = useSearchStore();
const goodsStore = useGoodsStore();
const { searchVal } = storeToRefs(store);
const { search } = store;
const path = ref(router.currentRoute.value.path);
const keywoprd = ref(searchVal);

/** 按Enter搜索 */
function handleSearch() {
  search(keywoprd.value, () => {
    // 当在goodsList页面不不要做跳转
    if (path.value !== '/goodsList') {
      router.push('/goodsList');
    }

    if (path.value === '/goodsList') {
      goodsStore.getGoodsList(keywoprd.value);
    }
  });
}

function handleClickLeft() {
  router.back();
}
</script>

<template>
  <nut-searchbar v-model="keywoprd" clearable autofocus @search="handleSearch">
    <template v-slot:leftout>
      <nut-icon
        v-if="path === '/goodsList'"
        @click="handleClickLeft"
        size="20"
        name="left"
      ></nut-icon>
    </template>
    <template v-slot:leftin>
      <nut-icon size="14" name="search"></nut-icon>
    </template>
    <template v-slot:rightout>
      <nut-button type="danger" size="small" @click="handleSearch"
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
