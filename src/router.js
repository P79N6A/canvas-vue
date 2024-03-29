import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '组件连线',
      component: () => import('./page/drag-link/index.vue')
    },
    {
      path: '/test',
      name: '测试',
      component: () => import('./force-graph/test.vue')
    }
  ]
})
