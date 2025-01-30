import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.eplex.ru/v2/',
    proxy: false  // Отключаем прокси, если оно не нужно
});

export default instance;
