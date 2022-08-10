<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 14:12:19
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 14:14:06
 * @Description:
-->

## 安装

`npm i @nutui/nutui`

## 导入全部组件

```js
import { createApp } from 'vue';
import App from './App.vue';
// 注意：这种方式将会导入所有组件
import NutUI from '@nutui/nutui';
// 采用按需加载时  此全局css样式，需要删除
import '@nutui/nutui/dist/style.css';
createApp(App).use(NutUI).mount('#app');
```

## 使用方式

```vue
<script setup>
import { reactive, toRefs } from 'vue';
const state = reactive({
  searchValue: '',
});
</script>

<template>
  <header>
    <nut-searchbar v-model="searchValue">
      <template v-slot:leftout>
        <nut-icon @click="clickLeft" size="20" name="left"></nut-icon>
      </template>
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
      <template v-slot:rightout> 搜索 </template>
    </nut-searchbar>
    </div>
  </header>
</template>
```
