/*
 * @Author: 朽木白
 * @Date: 2022-08-15 13:59:42
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 15:08:56
 * @Description: 商品
 */

const goodsList = (() => {
  const result = [];
  for (let index = 0; index < 50; index++) {
    result.push({
      id: index + 1,
      name: '衣服' + index + 1,
      'price|1-1000': 100,
      createTime: '@datetime',
      shopName: '百鹊亭男装旗舰店',
      src: 'https://img11.360buyimg.com/n2/s370x370_jfs/t1/19366/5/18220/115645/62c12dbfE8b715983/42b11cd660eba3d9.jpg!q70.jpg.webp',
    });
  }
  return result;
})();

export default [
  {
    url: '/api/goods/list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: goodsList,
      };
    },
  },
];
