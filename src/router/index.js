/*
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 16:01:55
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';
import Search from '../views/Search.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: () => import('../views/GoodsList.vue'),
    },
  ],
});

export default router;
