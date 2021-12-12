import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chat from '../views/Chat.vue'
import { auth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  console.log('Current user in auth guard: ', user)
  if(!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}
const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if(user) {
    next({ name: 'Chat' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
