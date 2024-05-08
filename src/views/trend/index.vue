<template>
  <div>
    <div class="flex">
      <div><m-trend text="营业额" upIcon="CaretTop" /></div>
      <div><m-trend text="销售额" downIcon="CaretBottom" type="down" /></div>
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
