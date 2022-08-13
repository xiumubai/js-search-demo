<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-12 17:44:19
 * @Description: 
-->
<script setup>
defineProps({});
</script>

<template>
  <div class="tab-list">
    <div class="tab-container">
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999">标签</nut-tag>
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
      <nut-tag class="tag" color="#E9E9E9" textColor="#999999"
        >标标签签</nut-tag
      >
    </div>
    <div class="filter">
      <span class="btn-filter">筛选</span>
    </div>
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

.filter {
  /* position: absolute;
  right: 10px;
  top: 10px; */
}

.btn-filter {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.btn-filter:before {
  content: '';
  z-index: 1;
  pointer-events: none;
  background-color: #e5e5e5;
  width: 1px;
  height: 8px;
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
</style>
