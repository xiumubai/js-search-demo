<!--
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-10 14:58:43
 * @Description: 
-->
<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';
import SearchHistory from './components/SearchHistory.vue';

import { reactive, toRefs } from 'vue';
const state = reactive({
  searchValue: '',
});

function handleSearch(val, event) {
  console.log('val', val);
  console.log('searchValue', state.searchValue);
}
</script>

<template>
  <header>
    <nut-searchbar
      v-model="state.searchValue"
      clearable
      autofocus
      @search="handleSearch"
    >
      <template v-slot:leftout>
        <nut-icon @click="clickLeft" size="20" name="left"></nut-icon>
      </template>
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
      <template v-slot:rightout>
        <nut-button @click="handleSearch" type="danger" size="small"
          >搜索</nut-button
        >
      </template>
    </nut-searchbar>
    <div class="wrapper">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
      <search-history></search-history>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
