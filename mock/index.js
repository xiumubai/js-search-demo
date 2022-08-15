/*
 * @Author: 朽木白
 * @Date: 2022-08-15 13:59:42
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:00:18
 * @Description:
 */
export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: {
          'rows|10': [
            {
              id: '@guid',
              name: '@cname',
              'age|20-30': 23,
              'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
            },
          ],
        },
      };
    },
  },
];
