import { TOKEN_NAME } from '../config/constants';

export const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
};

export const setToken = (token) => {
    return localStorage.setItem(TOKEN_NAME, token);
};

export const removeToken = () => {
    return localStorage.removeItem(TOKEN_NAME);
};
