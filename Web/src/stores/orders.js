import {defineStore} from 'pinia';
import axios from '../api/axiosInstance';
import router from '../router';
import {useAuthStore} from "@/stores/auth";

export const useOrdersStore = defineStore('orders', {
    state: () => ({
        orders: [],
        loading: false
    }),
    getters: {
        formattedOrders(state) {
            return state.orders.map(order => ({
                ...order,
                cd: order.cd ? new Date(order.cd) : null,
                dd: order.dd ? new Date(order.dd) : null,
                ddg: order.ddg ? new Date(order.ddg) : null,
            }));
        }
    },
    actions: {
        async fetchOrders() {
            const token = localStorage.getItem('authToken');
            if (!token) {
                this.handleAuthError();
                return;
            }

            this.loading = true;
            try {
                const response = await axios.get('orders/orders', {
                    headers: {'X-Eplex-Token': token}
                });
                this.orders = response.data.data;
            } catch (error) {
                if (error.response?.status === 401) {
                    this.handleAuthError();
                } else {
                    console.error("Ошибка загрузки заказов", error);
                }
            } finally {
                this.loading = false;
            }
        },
        async refreshOrders() {
            await this.fetchOrders();
        },
        handleAuthError() {
            const authStore = useAuthStore();
            authStore.logout();
            this.$toast.error(this.$t('login.failed'));
            router.push('/');
        }
    }
});