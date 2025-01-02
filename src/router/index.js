import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import SingleProductView from '@/views/SingleProductView.vue'

const routes = [
    {
        /**
         * 404
         */
        path: "/:pathMatch(.*)*",
        redirect: '/'
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView,
    },
    {
        path: '/shop/:id',
        name: 'shop-product',
        component: SingleProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
