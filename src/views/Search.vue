<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 16:34:00
 * @Description: 
-->
<script setup>
import SearchHistory from '@/components/Searchhistory.vue';
import SearchHot from '@/components/SearchHot.vue';
import SearchHeader from '@/components/SearchHeader.vue';
</script>
<template>
  <div>
    <search-header></search-header>
    <div class="search-history">
      <search-history></search-history>
      <search-hot></search-hot>
    </div>
  </div>
</template>

<style></style>
