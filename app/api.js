import axios from 'axios';

const API_URL = 'https://api.timbu.cloud';
const API_KEY = '5b69f1b763b04ac99ed0b9240af8aa3b20240705155646178322';
const APP_ID = 'D122UCE0QP4LL8P';
const ORGANIZATION_ID = 'a9878903b6744bfab4d1e2019e1f69f0';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`, // Use consistent casing for constants
  },
  timeout: 10000 // Set a timeout of 10 seconds
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products', {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: false,
        page: 1,
        size: 10,
        Appid: APP_ID,
        Apikey: API_KEY,
      }
    });
    return response.data.items; // Adjusted to return the items array
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};
