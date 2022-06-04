import request from '../config/AxiosInterceptor';

export const GetUsersApi = async (params) => {
    const response = await request({
        url: '/dashboard/all-users',
        params
    });

    return response;
};

export const GetUserDetailsByIdApi = async (_id) => {
    const response = await request({
        url: `/dashboard/details/${_id}`
    });

    return response;
};
