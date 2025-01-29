import axios from "axios";

const api = axios.create({
    baseURL: "https://api.eplex.ru/v2",
    headers: { "Content-Type": "application/json" },
});

export default api;
