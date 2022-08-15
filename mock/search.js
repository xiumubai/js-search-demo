/*
 * @Author: 朽木白
 * @Date: 2022-08-15 13:59:42
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:25:05
 * @Description:
 */

export default [
  /** 模糊搜索关键字匹配 */
  {
    url: '/api/search/key-words-list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['男装', '女装', '童装'],
      };
    },
  },
  /** 热门搜索列表 */
  {
    url: '/api/search/hot',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: [
          { name: '女装', isHot: true },
          { name: '男装', isHot: true },
          { name: '童装', isHot: false },
          { name: '耐克', isHot: false },
          { name: '李宁', isHot: false },
          { name: '电脑', isHot: false },
          { name: '章丘大铁锅', isHot: false },
          { name: '卫生纸', isHot: false },
          { name: '湿巾', isHot: false },
        ],
      };
    },
  },
  /** 历史搜索列表 */
  {
    url: '/api/search/history',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['上衣', '男装', '女装'],
      };
    },
  },
];
