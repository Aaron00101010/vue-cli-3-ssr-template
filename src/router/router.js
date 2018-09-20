import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import world from '@/components/world'
import notFound from '@/components/404'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/hello',
        component: hello
      },
      {
        path: '/world',
        component: world
      },
      {
        path: '/'
      },
      {
        path: '*',
        component: notFound
      }
    ]
  })
}
