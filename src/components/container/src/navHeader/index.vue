<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse" />
      <el-icon-fold v-else />
  </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()

let emits = defineEmits(['update:collapse'])
const toggle = () => {
  // 需要修改父组件的数据
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>