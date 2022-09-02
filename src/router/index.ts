import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/match'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/match'
      },
      {
        path: 'match',
        component: () => import('@/views/TabMatch.vue')
      },
      {
        path: 'squad',
        component: () => import('@/views/TabSquad.vue')
      },
      {
        path: 'previous',
        component: () => import('@/views/TabPrevious.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
