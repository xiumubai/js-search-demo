/*
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 13:55:13
 * @Description:
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 注意：这种方式将会导入所有组件
import NutUI from '@nutui/nutui';

import App from './App.vue';
import router from './router';

import './assets/main.css';
// 采用按需加载时  此全局css样式，需要删除
import '@nutui/nutui/dist/style.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(NutUI);
app.mount('#app');
