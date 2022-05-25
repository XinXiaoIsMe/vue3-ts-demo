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
        path: '/todolist',
        component: ()  => import('@/views/Todolist.vue')
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
