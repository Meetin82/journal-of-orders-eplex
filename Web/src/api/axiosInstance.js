import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.eplex.ru/v2/',
});

delete instance.defaults.headers.common["XMLHttpRequest"];

export default instance;
