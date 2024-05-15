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
            @change="changeSelect"
            filterable
            :filter-method="filterCity"
            placeholder="请搜索城市"
            style="width: 240px"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
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
import { onMounted, ref, watch } from 'vue'
import city from '../lib/city'
import province from '../lib/province.json'
import { City } from './types'

let emits = defineEmits(['changeCity', 'changeProvince'])

// 最终选择的结果
let result = ref<string>('请选择')
// 控制弹出层的显示
let visible = ref<boolean>(false)
// 单选框的值：按城市还是按省份选择
let radioValue = ref<string>('1')
// 下拉框的值 搜索下拉框
let selectValue = ref<string>('')
// 下拉框显示城市的数据
const options = ref<City[]>([])

// 所有城市的数据
let cities = ref(city.cities)
// 所有省份的数据
let provinces = ref(province)
// 搜索输入框的值
let searchValue = ref<string>('')
const allCities = Object.values(cities.value).flat(2)

onMounted(() => {
  // 获取下拉框的城市属性
  let values = Object.values(cities.value).flat(2)
  options.value = values
})

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

// 自定义搜索过滤
const filterCity = (val: string) => {
  searchValue.value = val
  if (val === '') {
    options.value = allCities
  } else {
    if (radioValue.value === '1') {
      // 中文和拼音一起过滤
      options.value = allCities.filter((item: City) => {
        return item.name.includes(val) || item.spell.includes(val)
      })
    } else {
      // 只过滤中文
      options.value = allCities.filter((item: City) => {
        return item.name.includes(val)
      })
    }
  }
}

// 监听输入框的值
watch(() => searchValue.value, val => {
  filterCity(val)
})

const changeSelect = (val: number) => {
  const city = allCities.find(item => item.id === val)!
  result.value = city.name
  if (radioValue.value === '1') {
    emits('changeCity', city)
  } else {
    emits('changeProvince', city.name)
  }
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
