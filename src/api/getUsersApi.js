import request from '../config/AxiosInterceptor';
import setDelay from '../utils/setDelay';

export const GetUsersApi = async (params) => {
    const response = await request({
        url: '/dashboard/all-users',
        params
    });

    return response;
};

export const GetUserDetailsByIdApi = async (_id) => {
    await setDelay(3000); // TODO: Remove delay
    const response = await request({
        url: `/dashboard/details/${_id}`
    });

    return response;
};
