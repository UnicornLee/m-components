<template>
  <m-notification :value="50">
    <template #default>
      <m-list></m-list>
    </template>
  </m-notification>
  <br />
  <br />
  <m-notification :value="50" :max="30" />
  <br />
  <br />
  <m-notification :value="50" is-dot />
  <br />
  <br />
  <m-notification icon="ChatRound" :value="50" />
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

</style>
