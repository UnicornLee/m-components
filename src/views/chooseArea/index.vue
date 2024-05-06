<template>
  <m-choose-area @change="changeArea" />
</template>

<script setup lang="ts">
import mChooseArea from '../../components/chooseArea/src/index.vue'

const changeArea = (area: string) => {
  console.log(area)
}
</script>

<style scoped lang="scss">

</style>
