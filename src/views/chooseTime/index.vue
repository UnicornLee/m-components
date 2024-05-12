<template>
  <m-choose-time :startOptions="startOptions" @startChange="startChange" @endChange="endChange" />
  <br />
  <br />
  <m-choose-date
    :startOptions="startOptions"
    :disable-today-before="false"
    @startChange="startDateChange"
    @endChange="endDateChange"
  />
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

const startDateChange = (val: Date) => {
  console.log(val)
}
const endDateChange = (val: {startDate: Date, endDate: Date}) => {
  console.log(val)
}
</script>

<style scoped lang="scss">

</style>
