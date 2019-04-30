import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login-page',
      component: () => import('../views/Login.vue'),
      meta: {
        mustNotLogedIn: true
      }
    },
    {
      path: '/register',
      name: 'register-page',
      component: () => import('../views/Registration.vue'),
      meta: {
        mustNotLogedIn: true
      }
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreatePost.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

routes.beforeEach((to, from, next) => {
  if (
    !localStorage.getItem('pikavueAuth') &&
    to.matched.some(record => record.meta.requiresAuth)
  ) {
    next({ name: 'login-page' })
  } else if (
    localStorage.getItem('pikavueAuth') &&
    to.matched.some(record => record.meta.mustNotLogedIn)
  ) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default routes
