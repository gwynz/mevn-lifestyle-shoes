import Vue from 'vue'
import Router from 'vue-router'
import product from '@/views/product/index.vue'
import Detail from '@/views/detail-product/index.vue'
import LandingPage from '@/views/landing-page/index.vue'
import checkoutPage from '@/views/checkout-page/index.vue'
import store from '@/store/app.js'
Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/product',
      name: 'product',
      component: product,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkoutPage,
      meta: {
        requiresAuth: true
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})
export default router