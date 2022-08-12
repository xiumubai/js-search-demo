<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 22:27:38
 * @Description: 
-->
<script setup>
import { reactive, ref } from 'vue';

const state = reactive({
  options1: [
    { text: '综合', value: 0 },
    { text: '最新上架', value: 1 },
    { text: '价格最低', value: 2 },
    { text: '价格最高', value: 3 },
  ],
  options2: [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ],
  value1: 0,
  value2: 'a',
});

function handleChange(val) {
  console.log('val', val);
}
</script>

<template>
  <nut-menu>
    <nut-menu-item v-model="state.value1" :options="state.options1" />
    <nut-menu-item
      v-model="state.value2"
      @change="handleChange"
      :options="state.options2"
    />
  </nut-menu>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
