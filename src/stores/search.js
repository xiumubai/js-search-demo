/*
 * @Author: 朽木白
 * @Date: 2022-08-15 10:17:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 15:31:39
 * @Description:
 */
import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchStore = defineStore({
  id: 'serach',
  state: () => ({
    searchVal: '衣服',
    searchHistory: [],
    searchHot: [],
  }),
  getters: {
    searchHistoryList: (state) => state.searchHistory,
  },
  actions: {
    clearSerach() {
      console.log('clearSerach');
      this.searchHistory = [];
    },
    search(val, cb) {
      this.searchVal = val;
      // TODO 数组去重
      this.searchHistory.push(val);
      cb();
    },
    /**
     * @description: 查询热门搜索接口
     * @return {*}
     */
    async getHotList() {
      await axios
        .get(`/api/search/hot`)
        .then((res) => {
          this.searchHot = res.data.data;
          console.log('hot', res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    /**
     * @description: 查询历史搜索接口
     * @return {*}
     */
    async getHistoryList() {
      await axios
        .get(`/api/search/history`)
        .then((res) => {
          this.searchHistory = res.data.data;
          console.log('history', res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
