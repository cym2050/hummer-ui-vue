<template>
  <div>
    Tabs 组件
    <component :is="defaults[0]" /> 
    <component :is="defaults[1]" /> 
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    console.log(defaults[0])

    return { defaults }
  },
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // mounted() {
  //   console.log('mounted');
  // }
}
</script>