<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 14:51:29
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 15:47:43
 * @Description: 搜索历史
-->

<script setup>
import { ref } from 'vue';
const recentTagList = [
  '大锅饭',
  '黄精手链',
  '黄精手链',
  '黄精手链',
  '黄精手链',
];

const hostTagList = [
  { name: '大锅饭', isHot: true },
  { name: '大锅饭', isHot: true },
  { name: '大锅饭', isHot: false },
  { name: '大锅饭', isHot: false },
  { name: '大锅饭', isHot: false },
  { name: '大锅饭', isHot: false },
  { name: '大锅饭', isHot: false },
  { name: '大锅饭', isHot: false },
  { name: '大锅饭', isHot: true },
];
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const visible = ref(false);

function handleChangeWordVisible() {
  console.log(111);
  visible.value = !visible.value;
}
</script>

<template>
  <div class="search-history">
    <div class="recent-search search-cm">
      <div class="search-head cf">
        <p>最近搜索</p>
        <nut-icon name="del"></nut-icon>
      </div>
      <div class="search-tags">
        <span class="tags" v-for="(item, index) in recentTagList" :key="index">
          <nut-tag color="#E9E9E9" textColor="#999999">{{ item }}</nut-tag>
        </span>
      </div>
    </div>
    <div class="hot-serach search-cm">
      <div class="search-head cf">
        <p>热门搜索</p>
        <div class="msHotwordVisible">
          <span v-if="!visible" @click="handleChangeWordVisible">隐藏</span>
          <span v-else @click="handleChangeWordVisible">显示</span>
        </div>
      </div>
      <div class="recent-search-tags" v-show="!visible">
        <span class="tags" v-for="(item, index) in hostTagList" :key="index">
          <nut-tag color="#E9E9E9" textColor="#999999">{{ item.name }}</nut-tag>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-cm {
  padding: 15px 13px;
}

.search-head {
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.serach-tags {
  padding-bottom: 10px;
}

.tags {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}

.msHotwordVisible {
  color: #999;
  font-size: 15px;
}
</style>
