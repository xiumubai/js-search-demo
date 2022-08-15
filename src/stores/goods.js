/*
 * @Author: 朽木白
 * @Date: 2022-08-15 10:17:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 18:13:22
 * @Description:
 */
import { defineStore } from 'pinia';
import axios from 'axios';

export const useGoodsStore = defineStore({
  id: 'goods',
  state: () => ({
    goodsList: [],
  }),
  actions: {
    /**
     * @description: 查询历史搜索接口
     * @return {*}
     */
    async getGoodsList(searchVal) {
      if (searchVal) {
        await axios
          .get(`/api/goods/list`, {
            params: { name: searchVal },
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
          })
          .then((res) => {
            this.goodsList = res.data.data;
            console.log('goodsList', res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
});
