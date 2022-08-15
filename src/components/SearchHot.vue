<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 14:51:29
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 18:45:21
 * @Description: 热门搜索
-->

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSearchStore } from '../stores/search';

const router = useRouter();
const store = useSearchStore();
const { getHotList, search } = store;
const visible = ref(false);

onMounted(() => {
  getHotList();
});

function handleChangeWordVisible() {
  visible.value = !visible.value;
}

function textColor(isHot) {
  return isHot ? '#e93b3d' : '#999999';
}

function handleSearch(val) {
  console.log('val', val);
  search(val, () => {
    router.push('/goodsList');
  });
}
</script>

<template>
  <div class="search-cm">
    <div class="search-head">
      <p>热门搜索</p>
      <div class="search-hot-btn">
        <span v-if="!visible" @click="handleChangeWordVisible">隐藏</span>
        <span v-else @click="handleChangeWordVisible">显示</span>
      </div>
    </div>
    <div class="search-tags" v-show="!visible">
      <span class="tags" v-for="(item, index) in store.searchHot" :key="index">
        <nut-tag
          color="#E9E9E9"
          :textColor="textColor(item.isHot)"
          @click="handleSearch(item.name)"
          >{{ item.name }}</nut-tag
        >
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
  .search-hot-btn {
    color: #999;
    font-size: 15px;
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
