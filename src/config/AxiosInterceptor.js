import axios from 'axios';
import _ from 'lodash';
import { setToken } from '../utils/handleUserToken';
import { BACKEND_URL } from './constants';

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('match-me-token');
        if (token) config.headers.Authorization = `Bearer ${token}`;

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

            const userToken = _.get(response, 'data.data.token');
            if (userToken) setToken(userToken);

            console.log(response);
            return response;
        }

        throw response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        const errorResponse = _.get(error, 'response.data');
        console.log(errorResponse);
        return Promise.reject(errorResponse);
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
