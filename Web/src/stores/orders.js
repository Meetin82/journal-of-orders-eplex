import api from "@/api/axiosInstance.js";
import {defineStore} from "pinia";

export const useOrdersStore = defineStore("orders", {
    state: () => ({orders: []}),
    actions: {
        async fetchOrders() {
            try {
                const response = await api.get("/orders", {
                    params: {dfrom: "2025-01-27 00:00:00", dto: "2025-01-29 23:59:59"},
                });
                this.orders = response.data.data;
            } catch (error) {
                console.error("Ошибка загрузки заказов", error);
            }
        },
    },
});