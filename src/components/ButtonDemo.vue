<template>
  <h1>Button 组件示例</h1>
  <Demo :component='Button1demo' />
  <Demo :component='Button2demo' />
  <Demo :component='Button3demo' />
  <Demo :component='Button4demo' />
  <Demo :component='Button5demo' />
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Button1demo from './Button1.demo.vue'
import Button2demo from './Button2.demo.vue'
import Button3demo from './Button3.demo.vue'
import Button4demo from './Button4.demo.vue'
import Button5demo from './Button5.demo.vue'
export default {
    components: { Demo },
    setup() {
      return {
        Button1demo,
        Button2demo,
        Button3demo,
        Button4demo,
        Button5demo
      }
    }
}
</script>