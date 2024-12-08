import { createRouter, createWebHistory } from 'vue-router'
import TopView from '@/views/TopView.vue'
import BookListView from '@/views/BookListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top-page',
      component: TopView
    },
    {
      path: '/book/list',
      name: 'book-list',
      component: BookListView
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router