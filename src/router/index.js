import { createRouter, createWebHistory } from 'vue-router'
import Form from '@/views/FormPages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Form,
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/TablePages.vue'),
    },
  ],
})

export default router
