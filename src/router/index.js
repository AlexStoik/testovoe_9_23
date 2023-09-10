import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import CoctailsView from '@/views/CoctailsView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    redirect: `/${store.state.cocktailsList[0]}`
  },
  {
    path: '/:cocktail_code',
    component: CoctailsView,
    beforeEnter: (to, from, next) => {
      if (store.state.cocktailsList.indexOf(to.params.cocktail_code) === -1) {
        next('/404')
      }
      next()
    },
    children: [
      {
        path: ':catchAll(.*)',
        redirect: '404'
      }
    ]
  },
  {
    name: '404',
    path: '/404',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
