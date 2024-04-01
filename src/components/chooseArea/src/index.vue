<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select size="large" style="width: 240px" placeholder="请选择省份" v-model="province">
      <el-option value="1">1</el-option>
    </el-select>
    <el-select size="large" style="width: 240px; margin: 0 10px;" placeholder="请选择城市" v-model="city">
      <el-option value="2">2</el-option>
    </el-select>
    <el-select size="large" style="width: 240px" placeholder="请选择区域" v-model="area">
      <el-option value="3">3</el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import allAreas from '../lib/pca-code.json'
console.log(allAreas)
let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
</script>

<style scoped lang="scss">

</style>
