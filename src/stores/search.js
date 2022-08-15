/*
 * @Author: 朽木白
 * @Date: 2022-08-15 10:17:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 10:52:36
 * @Description:
 */
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter();
export const useSearchStore = defineStore({
  id: 'serach',
  state: () => ({
    searchVal: '123',
    searchHistory: ['大锅饭', '黄精手链'],
    searchHot: [
      { name: '女装123', isHot: true },
      { name: '男装', isHot: true },
      { name: '童装', isHot: false },
      { name: '耐克', isHot: false },
      { name: '李宁', isHot: false },
      { name: '电脑', isHot: false },
      { name: '章丘大铁锅', isHot: false },
      { name: '卫生纸', isHot: false },
      { name: '湿巾', isHot: false },
    ],
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
      // router.push('/goodsList');
    },
  },
});
