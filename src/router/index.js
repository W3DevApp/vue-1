import { createRouter, createWebHistory } from 'vue-router'
import Create from '../components/Create.vue'
import Edit from '../components/Edit.vue'
import Show from '../components/Show.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/show',
    name: 'show',
    component: Show
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
