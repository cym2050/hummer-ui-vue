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
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-lighting"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都十分简洁</p>
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
  margin: 64px auto;
  /* padding: 0 16px; */
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    >li {
      width: 300px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
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