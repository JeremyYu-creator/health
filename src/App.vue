<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { ElConfigProvider, } from 'element-plus'
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = zhCn
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <el-config-provider :locale="locale">
      <router-view />
  </el-config-provider>
</template>

<style scoped lang="less">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
