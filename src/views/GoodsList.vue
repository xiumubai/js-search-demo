<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 18:11:52
 * @Description: 
-->
<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@/stores/search';
import { useGoodsStore } from '@/stores/goods';
import SearchHeader from '@/components/SearchHeader.vue';
import GoodsList from '@/components/GoodsItem.vue';
import MenuList from '@/components/MenuList.vue';
import TabList from '@/components/TabList.vue';

const goodsStore = useGoodsStore();
const searchStore = useSearchStore();
const { goodsList } = storeToRefs(goodsStore);
const { searchVal } = storeToRefs(searchStore);

onMounted(() => {
  goodsStore.getGoodsList(searchVal.value);
});
</script>

<template>
  <div>
    <search-header></search-header>
    <menu-list></menu-list>
    <tab-list></tab-list>
    <goods-list v-if="goodsList.length > 0" :list="goodsList"></goods-list>
    <nut-empty v-else description="无商品"></nut-empty>
  </div>
</template>
<style scoped>
.goodsList {
  overflow: scroll-y;
}
</style>
