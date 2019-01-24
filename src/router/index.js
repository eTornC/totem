import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import storeList from '@/components/Stores/storeList'
import totem from '@/components/Totem'
import totemCarnisseria from '@/components/TotemCarnisseria'
import Mobile from '@/components/Mobile'
import Admin from '@/components/admin'
import totemManager from '@/components/paleta/totemManager'
import screenManager from '@/components/paleta/screenManager'
import storeManager from '@/components/paleta/storeManager'


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
      path: '/totemCarnisseria',
      name: 'totemCarnisseria',
      component: totemCarnisseria
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/screenManager',
          name: 'screenManager',
          component: screenManager
        },
        {
          path: '/storeManager',
          name: 'storeManager',
          component: storeManager
        },
        {
          path: '/totemManager',
          name: 'totemManager',
          component: totemManager
        }
      ]
    },
   

  ]
})