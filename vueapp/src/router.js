import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import base from './views/base.vue'
import directory from './views/directory.vue'
import store from './store.js'
import editor from './components/test2.vue'

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
        path: 'editor',
        name: 'editor',
        component: editor
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

/*router.beforeEach((to, from, next) => {
  if(from.path==='/base/test'){
    console.log(store.state.previouspath,'router')
    //router.go(-1)
    router.push({ name: 'directory', params: { path: "/"} })
    //next('/base/files/')
    //console.log(to,from,"Directory watch from test router")
  } else {
    console.log(store.state.previouspath,'router')
    //console.log(window.history.back)
    //console.log(to,from,"Directory else con test router")
next();
}
})*/

export default router
