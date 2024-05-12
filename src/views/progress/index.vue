<template>
  <m-progress :percentage="60" is-animation />
  <m-progress :percentage="60" is-animation type="circle" />
  <m-progress
    :percentage="80"
    is-animation
    :text-inside="true"
    :stroke-width="22"
    status="warning"
  />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>
