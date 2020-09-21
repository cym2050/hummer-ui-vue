<template>
<div>
  <h1>Switch 组件示例 </h1>
  <Demo :component='Switch1Demo' />
  <Demo :component='Switch2Demo' />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'


import { ref } from 'vue'
export default {
  components: {
    Demo
  },
  setup() {
    const bool = ref(false)
    return {
      Switch1Demo,
      Switch2Demo
    }
  }
}
</script>
