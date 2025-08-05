// import axios from 'axios';
// const API = axios.create({ baseURL: 'http://localhost:4001/api' });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem('token');
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export default API;


// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
