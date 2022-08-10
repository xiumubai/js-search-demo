<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 17:49:22
 * @Description: 
-->
<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <div v-for="item in list" :key="item.id" class="goods-item">
      <div class="item-left">
        <img :src="item.src" alt="封面" />
      </div>
      <div class="item-right">
        <div class="goods-title">{{ item.name }}</div>
        <div class="goods-blow">
          <div class="price">
            <strong>
              <em pri="869.00"
                >¥ <span class="int">{{ item.prtice }}</span></em
              >
            </strong>
          </div>
          <div class="prolist-line">
            <i class="mod-sign-tip"><span>满599减200</span></i>
          </div>
        </div>
        <div class="prolist-other">
          <span class="prolist-comment"><span>5000+</span>条评价</span>
          <span class="prolist-rate">好评率<span>99</span>%</span>
        </div>
        <div class="prolist-shop">
          <span class="shop-name">{{ item.shopName }}</span>
          <nut-icon name="right" size="12" color="#999"></nut-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.goods-item {
  padding: 10px;
  display: flex;
}
.item-left {
  width: 120px;
  height: 120px;
  overflow: hidden;
}

.item-left img {
  width: 100%;
  height: 100%;
}

.item-right {
  box-sizing: border-box;
  padding: 0 10px;
  overflow: hidden;
  flex: 1;
  height: 120px;
  margin-left: 10px;
  padding-left: 0px;
  border-width: 1px;
  border-bottom-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
}

.goods-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #333;
}

.price {
  display: inline-block;
  margin-right: 2px;
  color: #e4393c;
  height: 18px;
}

.price .int {
  font-weight: 400;
  font-size: 18px;
}

.prolist-line {
  display: inline-block;
}
.prolist-line i {
  border-radius: 2px;
  min-width: 16px;
  font-size: 10px;
  line-height: 15px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 5px;
  text-align: center;
  color: #e4393c;
  background: #fff;
  vertical-align: middle;
  border: 1px solid #e4393c;
}
.prolist-other {
  padding-top: 5px;
  font-size: 12px;
  color: #999;
}
.prolist-shop {
  display: flex;
  align-items: center;
}
.prolist-comment {
  margin-right: 2px;
}
.shop-name {
  font-size: 12px;
  color: #999;
}
</style>
