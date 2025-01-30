import { defineStore } from 'pinia';
import axios from '../api/axiosInstance';

export const useAuthStore = defineStore('auth', {
    state: () => ({ token: null }),
    actions: {
        async login(username, password) {
            const requestData = {
                frontend: {
                    WEB: {},  // Метаинформация для аналитики может быть пустой
                    name: 'WEB',
                    tz: 'Europe/Moscow',
                    userpc: '@WIN-EPX'
                },
                login: username,
                password: password
            };

            try {
                const response = await axios.post('auth', requestData, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log('Response:', response);
                this.token = response.data.token;
            } catch (error) {
                console.error('Login failed:', error.response || error); // Добавьте log для error.response
                throw error;
            }

        }
    }
});
