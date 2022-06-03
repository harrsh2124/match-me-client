import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchUsersList } from '../../slices/dashboard/usersListSlice';

const Dashboard = () => {
    const { users } = useSelector((state) => state.usersList);
    const dispatch = useDispatch();

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        if (!users.length) {
            console.log('No users');
            dispatch(handleFetchUsersList());
        } else {
            console.log(users);
            setUsersList((prevUsers) => {
                return [...prevUsers, ...users];
            });
        }

        // eslint-disable-next-line
    }, [users]);

    return (
        <Box>
            {usersList.map((user) => {
                return (
                    <Box
                        key={user._id}
                        sx={{
                            display: 'flex',
                            gap: '0.5rem'
                        }}
                    >
                        <Typography>{user.firstName}</Typography>
                        <Typography>{user.lastName}</Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default Dashboard;
