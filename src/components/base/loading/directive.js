import {createApp} from 'vue'
import Loading from './loading'

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    const bindValue = binding.value
    if (bindValue !== binding.oldValue) {
      bindValue ? append(el) : remove(el)
    }
  }
}

function append(el) {
  el.appendChild(el.instance.$el)
}

function remove(el) {
  el.removeChild(el.instance.$el)
}

export default loadingDirective
