import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/router'
import { createStore } from './store/store'

export function createApp () {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, store, router }
}
