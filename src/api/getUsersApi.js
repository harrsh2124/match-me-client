import request from '../config/AxiosInterceptor';
import setDelay from '../utils/setDelay';

export const GetUsersApi = async (params) => {
    await setDelay(3000); // TODO: Remove delay
    const response = await request({
        url: '/dashboard/all-users',
        params
    });

    return response;
};
