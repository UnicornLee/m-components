<template>
  <el-tabs class="list-tabs__item">
    <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
      <el-scrollbar max-height="300">
        <div class="container" @click="clickItem(item1, index1)" v-for="(item1, index1) in item.content" :key="index1">
          <div class="avatar" v-if="item1.avatar">
            <el-avatar size="small" :src="item1.avatar"></el-avatar>
          </div>
          <div class="content">
            <div v-if="item1.title" class="title">
              <div>{{item1.title}}</div>
              <el-tag v-if="item1.tag" :type="item1.tagType ? item1.tagType : 'primary'" size="small">{{item1.tag}}</el-tag>
            </div>
            <div v-if="item1.desc" class="time">{{item1.desc}}</div>
            <div v-if="item1.time" class="time">{{item1.time}}</div>
          </div>
        </div>
      </el-scrollbar>
      <div class="actions">
        <div class="a-item" @click="clickAction(action, i)" :class="{border: i !== actions.length - 1}" v-for="(action, i) in actions" :key="i">
          <div class="a-icon" v-if="action.icon">
            <component :is="`el-icon-${toLine(action.icon)}`"></component>
          </div>
          <div class="a-text">{{action.text}}</div>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import {PropType} from 'vue'
import { ActionOptions, ListItem, ListOptions } from './types'
import { toLine } from '../../../utils'

let props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

let emits = defineEmits(['clickItem', 'clickAction'])

let clickItem = (item: ListItem, index: number) => {
  emits('clickItem', {item, index})
}

let clickAction = (action: ActionOptions, index: number) => {
  emits('clickAction', {action, index})
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cusor: pointer;
  &:hover {
    background-color: #e6f6ff;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
    }
  }
}
.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .a-icon {
      margin-right: 4px;
      position: relative;
      top: 2px;
    }
  }
  .border {
    border-right: 1px solid #eee;
  }
}
</style>
