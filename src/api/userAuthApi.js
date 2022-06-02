import request from '../config/AxiosInterceptor';

export const UserSignInApi = async (body) => {
    const response = await request({
        url: '/auth/signin',
        method: 'POST',
        body
    });

    return response;
};
