<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select clearable size="large" style="width: 240px" placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province" size="large" style="width: 240px; margin: 0 10px;" placeholder="请选择城市" v-model="city">
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" size="large" style="width: 240px" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
import allAreas from '../lib/pca-code.json'

export interface AreaItem {
  code: string,
  name: string,
  children: AreaItem[]
}

export interface Data {
  name: string,
  code: string
}

// 下拉框选择省份的值
let province = ref<string>('')
// 下拉框选择城市的值
let city = ref<string>('')
// 下拉框选择区域的值
let area = ref<string>('')
// 所有的省市区数据
let areas = ref(allAreas)

// 城市下拉框的所有的值
let selectCity = ref<AreaItem[]>([])

watch(() => province.value, val => {
  if (val) {
    selectCity.value = areas.value.find(item => item.code === val)?.children || []
  }
  city.value = ''
  area.value = ''
})

// 区域下拉框的所有的值
let selectArea = ref<AreaItem[]>([])

watch(() => city.value, val => {
  if (val) {
    selectArea.value = selectCity.value?.find(item => item.code === val)?.children || []
  }
  area.value = ''
})

const emits = defineEmits(['change'])
// 监听选择区域的值
watch(() => area.value, val => {
  if (val) {
    let provinceData: Data = {
      code: province.value,
      name: allAreas.find(item => item.code === province.value)?.name || ''
    }
    let cityData: Data = {
      code: city.value,
      name: selectCity.value.find(item => item.code === city.value)?.name || ''
    }
    let areaData: Data = {
      code: val,
      name: selectArea.value.find(item => item.code === val)?.name || ''
    }
    emits('change', {
      province: provinceData,
      city: cityData,
      area: areaData
    })
  }
})
</script>

<style scoped lang="scss">

</style>
