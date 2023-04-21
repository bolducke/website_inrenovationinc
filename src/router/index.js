import Vue from 'vue'
import Router from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      try {
        return goTo(to.hash)
      } catch(error) { 
        /* empty statement */
      }
    } else if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  },
  afterEach: (to) => {
    if (to.hash) {
      return goTo(to.hash)
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/main/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/main/home/Index.vue'),
          meta: { src: require('@/assets/main/pexels-anete-lusina-4792479.jpg') },
        },
        {
          path: 'services',
          name: 'Services',
          component: () => import('@/views/main/services/Index.vue'),
          meta: { src: require('@/assets/main/pexels-anete-lusina-4792483.jpg') },
        },
        {
          path: 'contact-us',
          name: 'Contact',
          component: () => import('@/views/main/contact-us/Index.vue'),
          meta: { src: require('@/assets/main/pexels-anete-lusina-4792501.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/main/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router
