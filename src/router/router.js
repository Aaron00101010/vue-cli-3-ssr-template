import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/cn-node',
        component: () => import('@/components/cn-node')
      },
      {
        path: '/hello',
        component: () => import('@/components/hello')
      },
      {
        path: '/world',
        component: () => import('@/components/world')
      },
      {
        path: '/404',
        component: () => import('@/components/404')
      },
      {
        path: '/'
      },
      {
        path: '*',
        redirect: '/404'
      }
    ]
  })
}
