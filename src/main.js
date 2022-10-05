import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import Toaster from "@meforma/vue-toaster";
import routes from './routes'


const app  = createApp(App)
app.mount('#app')
app.use(Toaster)
app.use(store)
app.use(Antd)
app.use(routes)


