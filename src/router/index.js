import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Instructors from '@/components/Instructors.vue'
import Instructor from '@/components/Instructor.vue'
import AddInstructor from '@/components/AddInstructor.vue'
import EditInstructor from '@/components/EditInstructor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: Instructors
  },
  {
    path: '/instructors/new',
    name: 'AddInstructor',
    component: AddInstructor
  },
  {
    path: '/instructors/edit/:id',
    name: 'EditInstructor',
    component: EditInstructor
  },
  {
    path: '/instructors/:id',
    name: 'Instructor',
    component: Instructor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
