import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: ()  => import('@/views/Home.vue')
      },
      {
        path: '/task',
        component: ()  => import('@/views/Task.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
