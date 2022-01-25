import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../pages/Contact.vue')
    },
    {
        path: '/experience',
        name: 'Experience',
        component: () => import('../pages/Experience.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
