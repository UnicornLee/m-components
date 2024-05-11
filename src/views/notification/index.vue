<template>
  <m-notification :value="50">
    <template #default>
      <m-list :list="list" :actions="actions" @clickItem="clickItem" @clickAction="clickAction"></m-list>
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
import {list, actions} from './data.ts'
import { ActionOptions, ListItem } from '../../components/list/src/types.ts'

let clickItem = (val: {item: ListItem, index: number}) => {
  console.log(val)
}

let clickAction = (val: {action: ActionOptions, index: number}) => {
  console.log(val)
}
</script>

<style scoped lang="scss">

</style>
