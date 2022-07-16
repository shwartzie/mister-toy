import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import toyDetails from '../views/toy-details.vue'
import toyApp from "../views/toy-app.vue"
import toyEdit from '../views/toy-edit.vue'
const router = createRouter({

  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/toy',
      name: 'toy-app',
      component:toyApp
    },
    {
      path: '/toy/:id',
      name: 'toy-details',
      component:toyDetails,
    },
    {
      path: '/toy/edit/:id?',
      name: 'toy-edit',
      component: toyEdit,
    },
  ]
})

export default router
