<template>
<div class="hummer-tabs">
  <div class="hummer-tabs-nav" ref="container">
    <div 
      class="hummer-tabs-nav-item" 
      :class="{ selected: t === selected }" 
      v-for="(t, index) in titles" 
      :ref="el => { if ( t === selected ) selectedItem = el }"
      :key='index'
      @click="select(t)"
     > 
      {{t}} 
    </div>
    <div class="hummer-tabs-nav-indicator" ref="indicator"></div>
  </div>
  <div class="hummer-tabs-content">
    <component class="hummer-tabs-content-item" :is="current" :key="selected"/>
  </div>
</div>
</template>

<script lang="ts">
import { computed, ref, watchEffect, onMounted, onUpdated } from 'vue'
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    // :ref="el => { if (el) navItems[index] = el }"
    // const navItems = ref<HTMLDivElement[]>([])
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {
      // const divs = navItems.value
      // const result = divs.filter(div => div.classList.contains('selected'))[0]
      // const { width } = result.getBoundingClientRect()

      const { width } = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const { left: left1 } = container.value.getBoundingClientRect()
      const { left: left2 } = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    // onMounted(x)
    // onUpdated(x)
    onMounted(() => watchEffect(x, { flush: 'post'}))  // 实现了上面两个的功能，在开始以及值更新的时候都会执行，
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return defaults.filter((tag) => {
                return tag.props.title === props.selected
              })[0]
    })
    const titles = defaults.map((tag) => tag.props.title)
    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return { defaults, titles, select, indicator, container, selectedItem, current }
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
    position: relative;
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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
}

</style>