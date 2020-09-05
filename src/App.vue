<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue'

export default {
    name: 'App',
    setup() {
        const asideVidible = ref(false)
        provide('xxx', asideVidible)
    }
}
</script>
