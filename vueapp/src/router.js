import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import base from './views/base.vue'
import directory from './views/directory.vue'
import store from './store.js'
import mo from './components/test2.vue'

Vue.use(Router)

var router = new Router({
  mode: 'hash',
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
        path: 'files/:path',
      name: 'directory',
      component:directory,
      },
      {
        path: 'test',
        name: 'mo',
        component: mo
      }]
    },

  ]
})

/*router.beforeEach((to, from, next) => {
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

router.beforeEach((to, from, next) => {
  if(to.path == '/') {
  if(store.state.islogged) { 
    next('/base');
} else {
    next();
}
} else {
next();
}
})*/

export default router
