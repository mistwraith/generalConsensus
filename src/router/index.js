import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddPoll from '@/components/AddPoll'
import ViewPolls from '@/components/ViewPolls'


Vue.use(Router)

export default new Router({
  routes: [
/*
    {
      path: '/',
      name: 'AddPoll',
      component: AddPoll,
    },
*/
    {    	
      path: '/',
      name: 'ViewPolls',
      component: ViewPolls,
    },

  ]
})
