import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入自定义消息组件
import Message from '@/components/common/message-container/index.js'

const app = createApp(App)
app.use(store)
app.use(router)
// 使用消息组件
app.use(Message)
app.config.globalProperties.$my_message = (data) => {
    console.log(data);
    Message.install()
}

app.mount('#app')
