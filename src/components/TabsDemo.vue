<template>
  <h2>Tabs 示例</h2>
  <Demo :component="Tabs1demo" />
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1demo from './Tabs1.demo.vue'

export default {
  components: { Demo },
  setup() {
    return { Tabs1demo }
  }
}
</script>