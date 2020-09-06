// Aula5 - 42:28
import axios from 'axios';

const api = axios.create({
    // Aula5 - 43:42
    // baseURL: ''
    baseURL: 'http://192.168.0.17:3333'
    ,
});

export default api;