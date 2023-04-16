<template>
  <el-config-provider :locale="zhCn">
    <div class="app">
      <RouterView />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
<style scoped></style>
