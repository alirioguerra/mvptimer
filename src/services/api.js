import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.divine-pride.net/api/database',
});
