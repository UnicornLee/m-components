<template>
  <m-choose-time :startOptions="startOptions" @startChange="startChange" @endChange="endChange" />
</template>

<script setup lang="ts">
const startChange = (val: string) => {
  console.log(val)
}
const endChange = (val: {startTime: string, endTime: string}) => {
  console.log(val)
}

let startOptions = {
  size: 'small',
  clearable: false
}
</script>

<style scoped lang="scss">

</style>
