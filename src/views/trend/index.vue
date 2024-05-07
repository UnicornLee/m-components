<template>
  <div>
    <div class="flex">
      <div><m-trend text="营业额" reverseColor /></div>
      <div><m-trend text="销售额" type="down" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.flex {
  display: flex;

  div {
    margin-right: 10px;
  }
}
</style>
