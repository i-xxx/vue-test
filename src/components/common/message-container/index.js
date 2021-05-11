import { createVNode, render } from 'vue'
import Message from './message-container'

Message.install = (options) => {
    const container = document.createElement('div')
    container.className = 'xxx-message'
    const vm = createVNode(Message,options)
    render(vm, container)
    document.body.appendChild(container.firstElementChild)
}

export default Message