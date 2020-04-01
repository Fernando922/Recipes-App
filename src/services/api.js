import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lychee-pie-57435.herokuapp.com',
  timeout: 5000,
});

export default api;
