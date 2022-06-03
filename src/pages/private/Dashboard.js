import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchUsersList } from '../../slices/dashboard/usersListSlice';

const Dashboard = () => {
    const { users } = useSelector((state) => state.usersList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!users.length) {
            console.log(users);
            console.log('No users');
            dispatch(handleFetchUsersList());
        }
    }, []);

    useEffect(() => {
        console.warn('WARNINGGGGGGGGGGGGGGGGGGG');
    }, []);
    return <div>Dashboard</div>;
};

export default Dashboard;
