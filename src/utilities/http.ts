import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const tmdb = axios.create({
    method: 'get',
    baseURL: 'https://api.themoviedb.org/3/',
});

// Add a request interceptor
tmdb.interceptors.request.use(
    config => {
        // Do something before request is sent
        config.params = {
            ...config.params,
            api_key: process.env.VUE_APP_API_KEY,
        };
        return config;
    },
    error => {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
tmdb.interceptors.response.use(
    response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const errMsg = error.response.data.status_message || error;
        return Promise.reject(error);
    }
);

export default tmdb;
