<template>
  <el-menu
    :default-active="2"
    :collapse="collapse"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon><el-icon-homefilled /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><el-icon-check /></el-icon>
      <span>图片选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><el-icon-position /></el-icon>
      <span>省市区选择</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
