import Vue from 'vue'
import VueRouter from 'vue-router'
import Displayer from '../components/Displayer'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Displayer',
      component: Displayer
    }
  ]
})
