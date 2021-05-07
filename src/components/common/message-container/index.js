import {createSSRApp} from 'vue'
import Message from './message-container'

const messageBox = createSSRApp(Message)

Message.install = function () {
    console.log('哈哈哈，小垃圾');
    messageBox.mount(document.createElement('div'))
}

/*const messageBox = Vue.extend(Message)

Message.install = function (options, type) {
    if (options === undefined || options === null) {
        options = {
            content: ''
        }
    } else if (typeof options === 'string' || typeof options === 'number') {
        options = {
            content: options
        }
        if (type != undefined && options != null) {
            options.type = type;
        }
    }

    let instance = new messageBox({
        data: options
    }).$mount()

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.visible = true
    })
}*/

export default Message