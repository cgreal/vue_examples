import Vue from 'vue'
import Router from 'vue-router'
import Listing from '@/components/home'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: Listing
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
