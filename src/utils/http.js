import axios from 'axios';
// import qs from 'qs';

export const http = axios.create({
    timeout: 10000,
    baseURL: 'http://192.168.2.95:8203/mes-base-server/api',
    withCredentials: true, // send cookies when cross-domain requests
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})
