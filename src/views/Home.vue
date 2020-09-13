<template>
<div>
  <div class="topBarAndBanner" >
    <TopNav/>
    <div class="banner">
      <h1>蜂鸟 UI</h1>
      <h2>一个成长中的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <router-link to='/doc'>开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon">
        <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon">
        <use xlink:href="#icon-lighting"></use>
    </svg>
  </div>
</div>

</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import TopNav from '../components/TopNav.vue'
export default {
    components: { TopNav },
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #28d1c9;

.topBarAndBanner {
  background: linear-gradient(145deg, rgba(227,255,253,1) 0%, rgba(182,233,230,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  > svg {
    width: 64px;
    height: 64px;;
  }
}

.banner {
  color: $color; 
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}


</style>