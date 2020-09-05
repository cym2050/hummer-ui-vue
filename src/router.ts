import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tab from './components/Tab.vue'
import DocRoot from './components/DocRoot.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc, children: [
      { path: '', component: DocRoot},
      { path: 'switch', component: Switch},
      { path: 'button', component: Button},
      { path: 'dialog', component: Dialog},
      { path: 'tab', component: Tab},
    ]}
  ]
})