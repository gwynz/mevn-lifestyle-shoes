import Vue from 'vue'
import Router from 'vue-router'
import product from '@/views/product/index.vue'
import Detail from '@/views/detail-product/index.vue'
import LandingPage from '@/views/landing-page/index.vue'
import checkoutPage from '@/views/checkout-page/index.vue'
import admin from '@/views/admin/index.vue'
import STORE from '@/store/app.js'
Vue.use(Router)
var router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/login',
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
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: {
        requiresAuth: true
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (STORE.getters.isLoggedIn) {
      next()
      return
    }
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
router.onReady(() => {
  STORE.subscribe((mutations, state) => {
    switch (mutations.type) {
      case 'auth_success': {
        let redirect = router.history.current.query && router.history.current.query.redirect;
        console.log('sss', redirect)
        if (redirect && redirect != '/login') {
          router.push({
            path: redirect
          });
        }
      }
    }
  })
  STORE.dispatch('getUserByToken');
})

export default router