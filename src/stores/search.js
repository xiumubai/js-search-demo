/*
 * @Author: 朽木白
 * @Date: 2022-08-15 10:17:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:34:39
 * @Description:
 */
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();
export const useSearchStore = defineStore({
  id: 'serach',
  state: () => ({
    searchVal: '123',
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
    search(val) {
      console.log('val', val);
      this.searchVal = val;
      this.searchHistory.push(val);
      // router.push('/goodsList');
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
