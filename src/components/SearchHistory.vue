<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 14:51:29
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:31:53
 * @Description: 搜索历史
-->

<script setup>
import { onMounted } from 'vue';
import { useSearchStore } from '@/stores/search';

const store = useSearchStore();
const { clearSerach, getHistoryList } = store;

onMounted(() => {
  getHistoryList();
});
</script>

<template>
  <div class="search-cm" v-show="store.searchHistory.length > 0">
    <div class="search-head">
      <p>最近搜索</p>
      <nut-icon name="del" @click="clearSerach()"></nut-icon>
    </div>
    <div class="search-tags">
      <span
        class="tags"
        v-for="(item, index) in store.searchHistory"
        :key="index"
      >
        <nut-tag color="#E9E9E9" textColor="#999999">{{ item }}</nut-tag>
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-cm {
  padding: 15px 13px;
  .search-head {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .search-tags {
    padding-bottom: 10px;
    .tags {
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
