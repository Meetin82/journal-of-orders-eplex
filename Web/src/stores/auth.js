import {defineStore} from 'pinia';
import instance from "../api/axiosInstance";
import router from "@/router/index.js";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('authToken') || null
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await instance.post("auth", {
                    frontend: {
                        WEB: {},
                        name: "WEB",
                        tz: "Europe/Moscow",
                        userpc: "@WIN-EPX",
                    },
                    login: username,
                    password: password,
                });

                this.token = response.data.token;
                localStorage.setItem("authToken", response.data.token);
            } catch (error) {
                throw error;
            }
        },
        logout() {
            this.token = null;
            localStorage.removeItem('authToken');
            router.push("/");
        }
    },
});
