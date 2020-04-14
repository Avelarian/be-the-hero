import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.56.69.24:3333'
});

export default api;