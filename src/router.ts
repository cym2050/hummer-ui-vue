import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import { h } from 'vue';
import Markdown from './components/Markdown.vue';

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'



const history = createWebHashHistory()
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
      { path: '', redirect: '/doc/intro' },
      { path: 'intro', component: md('Intro') },
      { path: 'install', component: md('Install') },
      { path: 'get-started', component: md('get-started') },
      { path: 'switch', component: SwitchDemo},
      { path: 'button', component: ButtonDemo},
      { path: 'dialog', component: DialogDemo},
      { path: 'tab', component: TabsDemo},
    ]}
  ]
})