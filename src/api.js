import axios from 'axios';

const api = axios.create({
   // baseURL: 'http://localhost:3333'
    baseURL:'http://18.219.112.46:3333'

});

export default api;