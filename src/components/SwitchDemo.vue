<template>
    <Switch v-model:value="y" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components: { Switch },
    setup() {
        const y = ref(true)
        return { y }
    }
}
</script>