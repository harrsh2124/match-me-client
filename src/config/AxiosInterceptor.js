import axios from 'axios';
import { BACKEND_URL } from './constants';

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent

        config.headers['Content-Type'] = 'application/json';

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        response = response.data;

        if (response.success) {
            // Set user token if the token is present in response.

            return response;
        }

        throw response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error.response);

        return Promise.reject(error.response.data);
    }
);

const request = async ({ url, method = 'GET', params, body, headers }) => {
    const BASE_URL = BACKEND_URL + '/api/v1';

    const res = await axios.request({
        url: BASE_URL + url,
        method,
        params,
        data: body,
        headers
    });

    return res;
};

export default request;
