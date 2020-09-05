import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Yunmei from './components/Yunmei.vue'
import Yunmei2 from './components/Yunmei2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/',component: Yunmei },
        { path: '/xxx',component: Yunmei2 }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
