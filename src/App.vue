<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue'
import { router } from './router';

export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
        const asideVisible = ref(width <= 500 ? false : true) //判断屏幕宽，pc 一直显示边栏
        provide('asideVisible', asideVisible)
        router.afterEach(() => {  // 每次路由切换后都会执行
          if (width <= 500) {     // pc 不隐藏边栏
            asideVisible.value = false
          }
        })
    }
}
</script>
