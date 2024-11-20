import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-backend-api.com/api', // Cambia esto a tu URL del backend
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
