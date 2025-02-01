import {createRouter, createWebHistory} from 'vue-router';
import LoginView from '../views/LoginView.vue';
import OrdersView from '../views/OrdersView.vue';

const routes = [
    {path: '/', component: LoginView},
    {path: '/orders', component: OrdersView}
];

const router = createRouter({history: createWebHistory(), routes});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('authToken');
    if (to.path === '/orders' && !token) {
        next('/');
    } else {
        next();
    }
});

export default router;
