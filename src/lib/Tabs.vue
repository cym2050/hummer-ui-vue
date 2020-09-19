<template>
  <div v-for="(t, index) in titles" :key='index'> {{t}} </div>
  <component v-for="c in defaults" :is="c"/>  
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    // console.log('props', props);
    // console.log('context', context);
    
    // defaults.forEach((tag) => {
    //   console.log(tag);
    // })
    // defaults.forEach((tag) => {
    //   console.log({...tag});
    // })
    const titles = defaults.map((tag) => tag.props.title)


    return { defaults, titles }
  }
}
</script>