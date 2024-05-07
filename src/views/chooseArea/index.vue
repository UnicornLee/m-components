<template>
  <m-choose-area @change="changeArea" />
</template>

<script setup lang="ts">
const changeArea = (area: string) => {
  console.log(area)
}
</script>

<style scoped lang="scss">

</style>
