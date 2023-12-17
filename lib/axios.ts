import axios from 'axios';

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_AXIOS_baseUrl,
})

export default api;