<template>
  <el-popover
    placement="bottom-start"
    :width="430"
    trigger="click"
    v-model:visible="visible"
  >
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{'rotate': visible}" />
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" value="1" />
            <el-radio-button label="按省份" value="2" />
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15" style="margin-top: 4px">
          <el-select
            size="small"
            v-model="selectValue"
            filterable
            placeholder="请选择"
            style="width: 240px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '1'">
        <div class="city">
          <!-- <div v-for="(value, key) in cities">{{ key }}</div>-->
          <!-- 字母区域 -->
          <div class="city-item" @click="clickChat(item)" v-for="(item, index) in Object.keys(cities)" :key="index">{{ item }}</div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px;" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col :span="22" class="city-name">
                <div @click="clickItem(item)" class="city-name-item" v-for="(item, index) in value" :key="item.id">
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div v-for="(item, index) in Object.keys(provinces)" class="province-item" @click="clickChat(item)">
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(item, index) in Object.values(provinces)" :key="index">
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px;" :id="item1.id">
                <el-col :span="3">{{ item1.name }}:</el-col>
                <el-col :span="21" class="province-name">
                  <div @click="clickProvinceItem(item2)" class="province-name-item" v-for="(item2, index2) in item1.data" :key="index2">
                    <div>{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import city from '../lib/city'
import province from '../lib/province.json'
import { City } from './types'

let emits = defineEmits(['changeCity', 'changeProvince'])

// 最终选择的结果
let result = ref<string>('请选择')
// 控制弹出层的显示
let visible = ref<boolean>(false)
// 单选框的值：按城市还是按省份选择
let radioValue = ref<string>('2')
// 下拉框的值 搜索下拉框
let selectValue = ref<string>('')
// 下拉框显示城市的数据
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

// 所有城市的数据
let cities = ref(city.cities)
// 所有省份的数据
let provinces = ref(province)

// 点击每个城市
const clickItem = (item: City) => {
  // 给结果赋值
  result.value = item.name
  // 关闭弹出层
  visible.value = false
  emits('changeCity', item)
}

const clickProvinceItem = (item: string) => {
  // 给结果赋值
  result.value = item
  // 关闭弹出层
  visible.value = false
  emits('changeProvince', item)
}

// 点击字母区域
const clickChat = (item: string) => {
  let el = document.getElementById(item)
  if (el) el.scrollIntoView()
}
</script>

<style scoped lang="scss">
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.rotate {
  transform: rotate(180deg);
}
svg {
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: transform 0.25s linear;
}
.container {
  padding: 6px;
}
.city, .province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  .city-item, .province-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    cursor: pointer;
  }
}

.city-name, .province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item, .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>
