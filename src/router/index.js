import Vue from 'vue'
import Router from 'vue-router'
import Listing from '@/components/home'
import Contact from '@/components/contact'
import Details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Listing
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: Details
    }
  ]
})
