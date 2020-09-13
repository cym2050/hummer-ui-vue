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
  <div class="features-container">
    <ul class="features">
      <li>
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div>
          <h3>基于 Vue 3</h3>
          <p>使用 Vue 3 Composition API 构建</p>
        </div>
      </li>
      <li>
        <svg class="icon">
            <use xlink:href="#icon-typescript"></use>
        </svg>
        <div>
          <h3>基于 Typescript</h3>
          <p>源码用 Typescript 书写</p>
        </div>
      </li>
      <li>
        <svg class="icon">
            <use xlink:href="#icon-lighting"></use>
        </svg>
        <div>
          <h3>代码易读</h3>
          <p>每个组件的源代码都十分简洁</p>
        </div>
      </li>
    </ul>
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
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  svg {
    width: 64px;
    height: 64px;
  }
  > li {
    display: flex;
    align-items: center;
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