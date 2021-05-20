import { Component, createApp, defineComponent, h } from 'vue'
import App from './App.vue'
import './index.css'

const routes: { [key: string]: Component } = {
  '/': App,
  '/podcast': App,
}

const Router = defineComponent({
  data: () => ({
    currentRoute: window.location.pathname,
  }),
  computed: {
    CurrentComponent(): Component {
      return routes[this.currentRoute] || { template: '<p>Page not found.</p>' }
    },
  },
  render() {
    return h(this.CurrentComponent)
  },
})

createApp(Router).mount('#app')
