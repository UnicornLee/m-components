<template>
  <el-form :validate-on-rule-change="false" v-bind="$attrs" :model="model" :rules="rules">
    <el-form-item
      v-for="(item, index) in options"
      :key="index"
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
  </el-form>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { FormOptions } from './types/types'
import cloneDeep from 'lodash/cloneDeep'

let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  }
})

let model = ref<any>({})
let rules = ref<any>({})

onMounted(() => {
  let m: any = {}
  let r: any = {}
  props.options.forEach((item: FormOptions) => {
    m[item.prop!] =item.value
    r[item.prop!] = item.rules
  })
  model.value = cloneDeep(m)
  rules.value = cloneDeep(r)
  console.log(model.value, rules.value)
})
</script>

<style scoped lang="scss">

</style>
