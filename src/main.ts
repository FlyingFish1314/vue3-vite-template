import { createApp } from 'vue'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import registerApp from './global'
import '@/styles/index.scss'
// import 'element-plus/theme-chalk/src/message.scss'
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(registerApp)
app.mount('#app')
