<template>
  <div style="display: flex;">
    <div style="margin-right: 20px;">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledDate"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDisabledDate"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

let props = defineProps({
  // 开始日期占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始日期'
  },
  // 结束日期占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束日期'
  },
  // 是否禁用今天之前的日期
  disableTodayBefore: {
    type: Boolean,
    default: true
  }
})

let emit = defineEmits(['startChange', 'endChange'])

// 开始日期
let startDate = ref<Date | null>(null)
// 结束日期
let endDate = ref<Date | null>(null)
// 是否禁用结束日期
let endDateDisabled = ref<boolean>(true)

// 禁用开始日期的函数
const startDisabledDate = (date: Date) => {
  // 如果禁用今天之前的日期，则禁用今天之后的日期
  if (props.disableTodayBefore) return date.getTime() < Date.now() - 1000 * 60 * 60 * 24
}

// 禁用结束日期的函数
const endDisabledDate = (date: Date) => {
  if (startDate.value) return date.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
}

// 监听开始的日期变化
watch(() => startDate.value, val => {
  if (val) {
    endDateDisabled.value = false
    emit('startChange', val)
  } else {
    endDateDisabled.value = true
    endDate.value = null
  }
})
// 监听结束的日期变化
watch(() => endDate.value, val => {
  if (val) {
    emit('endChange', {
      startDate: startDate.value,
      endDate: val
    })
  }
})
</script>

<style scoped lang="scss">

</style>
