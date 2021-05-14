import { createVNode, render } from 'vue'
import Confirm from './confirm-dialog'

Confirm.install = (options) => {
    const container = document.createElement('div')
    const vm = createVNode(Confirm,options)
    render(vm, container)
    document.body.appendChild(container.firstElementChild)
}

export default Confirm