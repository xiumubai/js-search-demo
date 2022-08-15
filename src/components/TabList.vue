<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:37:06
 * @Description: 
-->
<script setup>
import { ref, reactive } from 'vue';

const tagList = [
  { id: 1, name: '京东物流' },
  { id: 2, name: '容量' },
  { id: 3, name: '产地' },
  { id: 4, name: '主体材质' },
  { id: 5, name: '净含量' },
  { id: 6, name: '新品' },
  { id: 7, name: '颜色' },
];

const filterList = [
  {
    id: -1,
    name: '分类',
    isArrow: true,
    type: 'category',
    desc: '全部分类 ',
  },
  {
    id: 0,
    name: '品牌',
    child: ['吉普', '吉普', '吉普', '吉普', '吉普', '吉普'],
  },
  {
    id: 1,
    name: '适用人群',
    child: ['青年', '中年', '青少年', '老年', '亲自', '情侣'],
  },
  {
    id: 2,
    name: '颜色',
    child: ['黑色', '灰色', '白色', '红色', '紫色', '蓝色'],
  },
  {
    id: 3,
    name: '尺寸',
    child: [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  },
  {
    id: 4,
    name: '季节',
    child: ['春季', '夏季', '四季通用hahafh', '秋季', '冬季'],
  },
];

const collapseList = [
  { name: '男装', child: [] },
  { name: '女装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
  { name: '童装', child: [] },
];
defineProps({});

const visible = ref(false);
const visible2 = ref(false);

const activeNames = reactive([1, 2]);

function handleFilter() {
  visible.value = true;
}

function handleJump() {
  visible2.value = true;
}
</script>

<template>
  <div class="tab-list">
    <div class="tab-container">
      <nut-tag
        v-for="item in tagList"
        :key="item.id"
        class="tag"
        color="#E9E9E9"
        textColor="#999999"
        >{{ item.name }}</nut-tag
      >
    </div>
    <div class="filter" @click="handleFilter">
      <span class="btn-filter">筛选</span>
    </div>

    <nut-popup
      position="right"
      :style="{ width: '80%', height: '100%' }"
      v-model:visible="visible"
    >
      <div class="filter-container">
        <div class="filter-item" v-for="item in filterList" :key="item.id">
          <div class="filter-title">
            <div class="title">{{ item.name }}</div>
            <div class="right" v-if="item.isArrow" @click="handleJump">
              <span class="desc">{{ item.desc }}</span>
              <nut-icon name="arrow-right" color="#999" size="12px"></nut-icon>
            </div>
          </div>

          <div class="filter-content">
            <div class="devider" v-if="!item.isArrow"></div>
            <div class="tags" v-for="(tag, index) in item.child" :key="index">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </nut-popup>

    <nut-popup
      position="right"
      :style="{ width: '80%', height: '100%' }"
      v-model:visible="visible2"
    >
      <nut-sticky top="1">
        <div class="type-header">已选分类：全部分类</div>
      </nut-sticky>
      <nut-collapse icon="down-arrow" v-model:active="activeNames">
        <nut-collapse-item
          v-for="(item, index) in collapseList"
          :key="index"
          :title="item.name"
          :name="index"
        >
          <nut-radiogroup>
            <nut-cell-group>
              <nut-cell>
                <nut-radio
                  label="1"
                  icon-name="checklist"
                  icon-active-name="checklist"
                  >选项1</nut-radio
                >
              </nut-cell>
              <nut-cell>
                <nut-radio
                  label="2"
                  icon-name="checklist"
                  icon-active-name="checklist"
                  >选项2</nut-radio
                >
              </nut-cell>
              <nut-cell>
                <nut-radio
                  label="3"
                  icon-name="checklist"
                  icon-active-name="checklist"
                  >选项3</nut-radio
                >
              </nut-cell>
            </nut-cell-group>
          </nut-radiogroup>
        </nut-collapse-item>
      </nut-collapse>
    </nut-popup>
  </div>
</template>

<style scoped>
.tab-list {
  /* position: relative; */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tag {
  margin-right: 8px;
}

.tab-container {
  flex: 1;
  white-space: nowrap;
  /* flex-wrap: nowrap; */
  /* display: flex; */
  overflow-x: scroll;
}

.tab-container::-webkit-scrollbar {
  display: none;
}

.btn-filter {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  display: inline-block;
  width: 50px;
}

.btn-filter:before {
  content: '';
  z-index: 1;
  pointer-events: none;
  background-color: #e5e5e5;
  width: 1px;
  height: 12px;
  -webkit-transform: scaleX(0.5);
  -webkit-transform-origin: 0 50%;
  margin-right: 4px;
  display: inline-block;
}

.btn-filter:after {
  content: '';
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-left: 2px;
  width: 13px;
  height: 13px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2M0ZFQTNDRTIxODUxMUU3QjI2REY5RTg4QzFFQzZGNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2M0ZFQTNDRjIxODUxMUU3QjI2REY5RTg4QzFFQzZGNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0N0RGRjc1MjE4NTExRTdCMjZERjlFODhDMUVDNkY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0N0RGRjc2MjE4NTExRTdCMjZERjlFODhDMUVDNkY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IfYP2wAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAVUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzBMmSsUAAAAGdFJOUwDTFcMWF8uWvbwAAABeSURBVBjTYzBLQ4BkBlSeYmIAAwSwigkxMImJQnmBiQoMcEmQFANQUgQhBZJ0AJIsYCmYpCNECiIJkwJJCjAwwqQYGNQSGNiSYBwGtgQQoi6P2QCZB5GmMQ9oJRAAALFhGrKX0V5WAAAAAElFTkSuQmCC')
    no-repeat;
  background-size: 13px auto;
}

.filter-container {
  background: #f7f7f7;
  height: 100%;
}

.filter-item {
  background: #fff;
  margin-bottom: 15px;
}
.filter-title {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-title .title {
  font-size: 16px;
  color: #333;
}

.filter-item .right {
  display: flex;
  align-items: center;
}

.filter-item .desc {
  color: #999;
  font-size: 12px;
}

.filter-content {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  padding-top: 10px;
  justify-content: space-around;
}

.filter-content .devider {
  content: '';
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #e5e5e5;
  height: 1px;
  left: 0;
  right: 0;
  top: 0;
  left: 10px;
}

.filter-content .tags {
  width: 28%;
  /* float: left; */
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 0 5px;
  color: #666;
  background-color: #f7f7f7;
  border-radius: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.type-header {
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
  padding: 0 10px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
}
</style>
