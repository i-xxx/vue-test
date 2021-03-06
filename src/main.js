import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 引入自定义消息组件
import Message from '@/components/common/message-container/index.js'
import Confirm from '@/components/common/xxxConfirmDialog/index.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$xxx_message = (data) => {
  Message.install(data)
}
app.config.globalProperties.$xxx_confirm = (data) => {
  Confirm.install(data)
  return new Promise((reslove, reject) => {

  })
}

app.mount('#app')