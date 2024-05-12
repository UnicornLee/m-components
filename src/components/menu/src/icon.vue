<template>
  <component :is="name" />
</template>

<script setup lang="ts">
let props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
svg {
  margin-right: 4px;
}
</style>
