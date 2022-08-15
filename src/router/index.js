/*
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 16:37:22
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router';
import SearchList from '../views/SearchList.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search',
      component: SearchList,
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: () => import('../views/GoodsList.vue'),
    },
  ],
});

export default router;
