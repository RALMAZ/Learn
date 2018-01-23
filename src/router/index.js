import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

// Cabinet (after sigin/signup)
import Home from '@/components/Cabinet/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
  	  {
  	    path: '/',
  	    name: 'Index',
  	    component: Index
  	  },
  	  {
  	    path: '/home',
  	    name: 'Home',
  	    component: Home
  	  }
  	]
})
