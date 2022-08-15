# jd-search-demo

使用 vue+vite 仿生京东搜索页

## 涉及技术

mock+axios+pina+vue-router4.0+NutUi

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 组件库

[NutUi](https://nutui.jd.com/#/zh-CN/guide/intro)

## 使用组件

## 实现主功能

### 1. 搜索页

- [x] 搜索功能
- [x] 最近搜索/删除最近搜索（删除历史搜索记录），添加缓存功能
- [x] 热门搜索
- [x] 隐藏/显示热门搜索
- [ ] 模糊搜索

### 2. 商品列表页

- [x] 商品列表展示
- [ ] 商品列表分页
- [ ] 商品列表页懒加载

### 3. 头部筛选条件

- [ ] 综合筛选
- [ ] 销量
- [ ] 有货优先
- [ ] 分类筛选

### 4. 横向滚动筛选条件

- [ ] 新品
- [ ] 品牌筛选（条件重置）

### 5. 附加功能

- [ ] 骨架屏
- [ ] 模糊搜索
- [ ] 虚拟列表滚动

### 6. 数据 mock

接口列表：

- [x] 获取热门搜索列表`api/search/hot`
- [x] 获取历史搜索列表`api/search/history`
- [x] 商品列表`api/goods/list`

补充说明：数据都是 mock 生成，所以在搜索的时候只有关键字【衣服】可以搜索到数据
