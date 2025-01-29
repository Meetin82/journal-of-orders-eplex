import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import OrdersView from "@/views/OrdersView.vue";
import { useAuthStore } from "@/stores/auth";

const routes = [
    { path: "/", component: LoginView },
    { path: "/orders", component: OrdersView },
];

const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.path === "/orders" && !authStore.token) {
        next("/");
    } else {
        next();
    }
});

export default router;
