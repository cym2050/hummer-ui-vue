<template>
<div class="hummer-tabs">
  <div class="hummer-tabs-nav">
    <div 
      class="hummer-tabs-nav-item" 
      :class="{ selected: t === selected }" 
      v-for="(t, index) in titles" 
      :key='index'
      @click="select(t)"
     > 
      {{t}} 
     </div>
  </div>
  <div class="hummer-tabs-content">
    <component class="hummer-tabs-content-item" :is="current" :key="selected"/>
    {{current}}
  </div>
</div>
</template>

<script lang="ts">
import { computed } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      console.log('重新计算')
      return defaults.filter((tag) => {
                return tag.props.title === props.selected
              })[0]
    })
    const titles = defaults.map((tag) => tag.props.title)
    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return { defaults, titles, select, current }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.hummer-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }
}

</style>