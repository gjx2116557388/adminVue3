import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import createStore from './vuex/store'


const app = createApp(App)
app.use(router)
app.use(createStore)
app.mount('#app')
