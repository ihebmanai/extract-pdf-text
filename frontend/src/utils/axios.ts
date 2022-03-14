import axios from 'axios';
const api = axios.create({
  baseURL: `https://server-extract-text-file.herokuapp.com/`
});

export default api;
