import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';

// 引入自定义消息组件
import Message from '@/components/common/message-container/index.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
// 使用消息组件
// app.use(Message)
app.config.globalProperties.$xxx_message = (data) => {
    console.log(data.type);
    console.log(data.message);
    Message.install(data)
}

app.mount('#app')
