import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue'),
        meta: { title: 'Home' }
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
