<template>
  <h2>Switch 示例</h2>

  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components: { Switch },
    setup() {
        const bool = ref(true)
        return { bool }
    }
}
</script>