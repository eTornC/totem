import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import storeList from '@/components/Stores/storeList'
import totem from '@/components/Totem'
import Mobile from '@/components/Mobile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/stores',
      name: 'storeList',
      component: storeList
    },
    {
      path: '/totem',
      name: 'totem',
      component: totem
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    }

  ]
})