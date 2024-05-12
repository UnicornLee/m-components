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
          <el-icon-arrowdown v-if="visible" />
          <el-icon-arrowup v-else />
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
        <el-col :offset="1" :span="15">
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
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let result = ref<string>('请选择')
let visible = ref<boolean>(false)
let radioValue = ref<string>('1')
let selectValue = ref<string>('')
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
</script>

<style scoped lang="scss">
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.container {
  padding: 6px;
}
</style>
