import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BabyBookView from '../views/BabyBookView.vue'
import FamilyTreeView from '../views/FamilyTreeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'home',
      component: HomeView,
      children: [
        {
          path: '/home',
          name: 'homepage',
          component: () => import('../components/TheWelcome.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/links',
          name: 'links',
          component: () => import('../views/LinksView.vue')
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/baby-books',
      name: 'baby-books',
      component: BabyBookView
    },
    {
      path: '/family-tree',
      name: 'baby-books',
      component: FamilyTreeView
    }
  ]
})

export default router
