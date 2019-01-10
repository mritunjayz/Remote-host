import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import base from './views/base.vue'
import directory from './views/directory.vue'
import store from './store.js'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/base',
      component: base,
      children:[{
        path: '',
      name: 'directory',
      component:directory
      }]
    },

  ]
})
router.beforeEach((to, from, next) => {
  if(to.path != '/') {
  if(store.state.islogged) { 
    next();
} else {
    next('/');
}
} else {
next();
}
  
})
export default router
