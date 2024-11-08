import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-backend-url.com/api',  // replace with actual backend URL
});

export default api;
