import { defineStore } from "pinia";
import api from "@/api/axiosInstance.js";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: localStorage.getItem("token") || null,
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
    },

    actions: {
        async login(username, password) {
            try {
                const response = await api.post("/auth", {
                    frontend: { WEB: {}, name: "WEB", tz: "Europe/Moscow", userpc: "@WIN-EPX" },
                    login: username,
                    password,
                });

                this.token = response.data.token;
                localStorage.setItem("token", this.token); // Сохранение в localStorage
                api.defaults.headers["X-Eplex-Token"] = this.token;
            } catch (error) {
                console.error("Ошибка авторизации", error);
            }
        },

        logout() {
            this.token = null;
            localStorage.removeItem("token"); // Удаление токена из localStorage
            delete api.defaults.headers["X-Eplex-Token"];
        },
    },
});
