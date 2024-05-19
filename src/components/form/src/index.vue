<template>
  <el-form v-if="model" :validate-on-rule-change="false" v-bind="$attrs" :model="model" :rules="rules">
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        />
      </el-form-item>
      <el-form-item
      v-if="item.children && item.children.length"
      :label="item.label"
      :prop="item.prop"
      :rules="item.rules"
    >
      <component
        v-bind="item.attrs"
        :is="`el-${item.type}`"
        v-model="model[item.prop!]"
      >
        <component
          v-for="(child, i) in item.children"
          :key="i"
          :is="`el-${child.type}`"
          :label="child.label"
          :value="child.value"
        />
      </component>
    </el-form-item>

    </template>
  </el-form>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref, watch } from 'vue'
import { FormOptions } from './types/types'
import cloneDeep from 'lodash/cloneDeep'

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

let model = ref<any>(null)
let rules = ref<any>(null)

// 初始化表单
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.forEach((item: FormOptions) => {
      m[item.prop!] =item.value
      r[item.prop!] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

onMounted(() => {
  initForm()
})

// 监听父组件传递进来的options
watch(() => props.options, () => {
  initForm()
}, { deep: true })
</script>

<style scoped lang="scss">

</style>
