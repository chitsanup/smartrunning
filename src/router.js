import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/LoginUsers.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/RegisUsers.vue')
    },
    {
      path: '/homeapp',
      name: 'homeapp',
      component: () => import('./views/Homeapp.vue')
    },
    {
      path: '/detailzone2',
      name: 'detailzone2',
      component: () => import('./views/DetailZone2.vue')
    },
    {
      path: '/detailzone3',
      name: 'detailzone3',
      component: () => import('./views/DetailZone3.vue')
    },
    {
      path: '/appsetting',
      name: 'appsetting',
      component: () => import('./views/Appsetting.vue')
    },
    
  ]
})
