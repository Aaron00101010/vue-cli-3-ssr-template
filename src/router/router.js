import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/hello',
        component: () => import('@/components/hello')
      },
      {
        path: '/world',
        component: () => import('@/components/world')
      },
      {
        path: '/'
      },
      {
        path: '*',
        component: () => import('@/components/404')
      }
    ]
  })
}
