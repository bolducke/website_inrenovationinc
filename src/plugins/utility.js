import Vue from 'vue'

Vue.component("vnode", {
    functional: true,
    render(h, context){
      return context.props.node
    }
  })