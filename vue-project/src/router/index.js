import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Todolist/Addlist.vue';
import Preview from '../components/Todolist/Preview.vue';
import Notfound from '../views/Notfound.vue';
import Edite from '../components/Todolist/Edite.vue';
import Details from '../components/Todolist/Details.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/edit/:id',
    name:'Edit',
    component:Edite
   },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path:"/details/:id",
      name:'details',
       component:Details
    },
    {
      path:"/:pathMatch(.*)*",
      name:'Notfount',
      component:Notfound,
      redirect:'/'
    }
    
  ]
})

export default router
