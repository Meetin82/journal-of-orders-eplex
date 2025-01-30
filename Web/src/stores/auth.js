import {defineStore} from 'pinia';
import instance from "../api/axiosInstance";

export const useAuthStore = defineStore('auth', {
    state: () => ({token: null}),
    actions: {
        async login(username, password) {
            const requestData = {
                frontend: {
                    WEB: {},
                    name: 'WEB',
                    tz: 'Europe/Moscow',
                    userpc: '@WIN-EPX',
                },
                login: username,
                password: password,
            };

            try {
                delete instance.defaults.headers.common["XMLHttpRequest"];
                const response = await instance.post('auth', requestData);
                console.log('Response:', response);
                this.token = response.data.token;
            } catch (error) {
                if (error.response) {
                    console.error('Response Error:', error.response);
                } else if (error.request) {
                    console.error('Request Error:', error.request);
                } else {
                    console.error('General Error:', error.message);
                }
                throw error;
            }
        },
    },
});
