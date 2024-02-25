import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/public',
      name: 'public',
      component: () => import('../views/PublicView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    },
    {
      path: '/private',
      name: 'private',
      component: () => import('../views/PrivateView.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: ()=> import('../views/VerifyView.vue'),
      props : (route) => ({
        code: route.query.code // 'code' 매개변수를 props로 전달합니다.
      })
    }
  ]
})

export default router
