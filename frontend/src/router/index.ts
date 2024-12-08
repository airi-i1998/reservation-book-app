import { createRouter, createWebHistory } from 'vue-router'
import TopView from '@/views/TopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top-page',
      component: TopView
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router