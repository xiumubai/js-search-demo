<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 22:19:07
 * @Description: 
-->
<script setup>
import GoodsList from '../components/GoodsItem.vue';
import MenuList from '../components/MenuList.vue';
const list = [
  {
    id: 1,
    src: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/105121/16/25077/413663/623477c2Edccb5194/156b3bbd68d8db50.jpg!q70.jpg.webp',
    name: '炉鼎盛 柴火灶农村家用灶 加厚室内户外土灶台 可移动材火灶烧柴火炉大锅饭灶农村铁锅炖灶烧柴炉 56cm单灶【大礼包】',
    price: 999,
    shopName: '炉鼎盛旗舰店',
  },
  {
    id: 2,
    src: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/105121/16/25077/413663/623477c2Edccb5194/156b3bbd68d8db50.jpg!q70.jpg.webp',
    name: '炉鼎盛 柴火灶农村家用灶 加厚室内户外土灶台 可移动材火灶烧柴火炉大锅饭灶农村铁锅炖灶烧柴炉 56cm单灶【大礼包】',
    price: 999,
    shopName: '炉鼎盛旗舰店',
  },
  {
    id: 3,
    src: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/105121/16/25077/413663/623477c2Edccb5194/156b3bbd68d8db50.jpg!q70.jpg.webp',
    name: '炉鼎盛 柴火灶农村家用灶 加厚室内户外土灶台 可移动材火灶烧柴火炉大锅饭灶农村铁锅炖灶烧柴炉 56cm单灶【大礼包】',
    price: 999,
    shopName: '炉鼎盛旗舰店',
  },
  {
    id: 4,
    src: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/105121/16/25077/413663/623477c2Edccb5194/156b3bbd68d8db50.jpg!q70.jpg.webp',
    name: '炉鼎盛 柴火灶农村家用灶 加厚室内户外土灶台 可移动材火灶烧柴火炉大锅饭灶农村铁锅炖灶烧柴炉 56cm单灶【大礼包】',
    price: 999,
    shopName: '炉鼎盛旗舰店',
  },
  {
    id: 5,
    src: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/105121/16/25077/413663/623477c2Edccb5194/156b3bbd68d8db50.jpg!q70.jpg.webp',
    name: '炉鼎盛 柴火灶农村家用灶 加厚室内户外土灶台 可移动材火灶烧柴火炉大锅饭灶农村铁锅炖灶烧柴炉 56cm单灶【大礼包】',
    price: 999,
    shopName: '炉鼎盛旗舰店',
  },
  {
    id: 6,
    src: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/105121/16/25077/413663/623477c2Edccb5194/156b3bbd68d8db50.jpg!q70.jpg.webp',
    name: '炉鼎盛 柴火灶农村家用灶 加厚室内户外土灶台 可移动材火灶烧柴火炉大锅饭灶农村铁锅炖灶烧柴炉 56cm单灶【大礼包】',
    price: 999,
    shopName: '炉鼎盛旗舰店',
  },
  {
    id: 7,
    src: 'https://img13.360buyimg.com/n2/s240x240_jfs/t1/105121/16/25077/413663/623477c2Edccb5194/156b3bbd68d8db50.jpg!q70.jpg.webp',
    name: '炉鼎盛 柴火灶农村家用灶 加厚室内户外土灶台 可移动材火灶烧柴火炉大锅饭灶农村铁锅炖灶烧柴炉 56cm单灶【大礼包】',
    price: 999,
    shopName: '炉鼎盛旗舰店',
  },
];
</script>

<template>
  <div>
    <menu-list></menu-list>
    <goods-list :list="list"></goods-list>
  </div>
</template>
<style scoped>
.goodsList {
  overflow: scroll-y;
}
</style>
