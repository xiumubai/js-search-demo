/*
 * @Author: 朽木白
 * @Date: 2022-08-15 10:17:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 18:30:43
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
  actions: {
    clearSerach() {
      console.log('clearSerach list');
      this.searchHistory = [];
      localStorage.removeItem('search-history');
    },
    search(val, cb) {
      console.log('searchVal', val);
      if (val) {
        this.searchVal = val;
        // 相同的值不需要添加到历史搜索记录当中
        if (!this.searchHistory.includes(val)) {
          this.searchHistory.push(val);
          localStorage.setItem(
            'search-history',
            JSON.stringify(this.searchHistory)
          );
        }
        cb();
      }
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
          const list = JSON.parse(localStorage.getItem('search-history'));
          if (list) {
            this.searchHistory = list;
          } else {
            this.searchHistory = res.data.data;
          }
          console.log('history', res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
