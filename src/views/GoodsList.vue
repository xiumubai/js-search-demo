<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 15:57:17
 * @Description: 
-->
<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useSearchStore } from '@/stores/search';
import GoodsList from '@/components/GoodsItem.vue';
import MenuList from '@/components/MenuList.vue';
import TabList from '@/components/TabList.vue';

const store = useSearchStore();
const list = ref([]);
onMounted(async () => {
  if (store.searchVal) {
    await axios
      .get(`/api/goods/list`, {
        params: { name: store.searchVal },
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      })
      .then((res) => {
        list.value = res.data.data;
        console.log('goodsList', res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
</script>

<template>
  <div>
    <menu-list></menu-list>
    <tab-list></tab-list>
    <goods-list v-if="list.length > 0" :list="list"></goods-list>
    <nut-empty v-else description="无商品"></nut-empty>
  </div>
</template>
<style scoped>
.goodsList {
  overflow: scroll-y;
}
</style>
