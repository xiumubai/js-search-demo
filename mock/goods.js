/*
 * @Author: 朽木白
 * @Date: 2022-08-15 13:59:42
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:19:56
 * @Description: 商品
 */
export default [
  {
    url: '/api/goods/list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: [],
      };
    },
  },
];
