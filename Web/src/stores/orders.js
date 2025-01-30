import { defineStore } from 'pinia';
import axios from '../api/axiosInstance';
import { useAuthStore } from './auth';

export const useOrdersStore = defineStore('orders', {
    state: () => ({ orders: [] }),
    actions: {
        async fetchOrders() {
            const authStore = useAuthStore();
            const response = await axios.get('orders/orders', { headers: { 'X-Eplex-Token': authStore.token } });
            this.orders = response.data.data;
        },
        async refreshOrders() {
            await this.fetchOrders();
        }
    }
});
