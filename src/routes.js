import Home from './views/Home.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'
import Vote from './views/Vote.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    meta: { title: 'Home', requiresAuth: true } 
  },
  {
    path: '/Login',
    meta: { title: 'login', guest: true },
    component: Login,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { 
    path: '/Vote', 
    component: Vote, 
    meta: { title: 'Vote', requiresAuth: true } 
  },
  { path: '/:path(.*)', component: NotFound },
]
