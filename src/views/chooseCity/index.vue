<template>
  <m-choose-city @changeCity="changeCity" @changeProvince="changeProvince" />
</template>

<script setup lang="ts">
const changeCity = (val: any) => {
  console.log(val);
}
const changeProvince = (val: string) => {
  console.log(val);
}
</script>

<style scoped lang="scss">

</style>
