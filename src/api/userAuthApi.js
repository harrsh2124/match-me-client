import request from '../config/AxiosInterceptor';

export const UserSignInApi = async (body) => {
    const response = await request({
        url: '/auth/signin',
        method: 'POST',
        body
    });

    return response;
};

export const UserSignUpApi = async (body) => {
    const response = await request({
        url: '/auth/signup',
        method: 'POST',
        body
    });

    return response;
};
