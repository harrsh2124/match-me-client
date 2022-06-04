import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UsersListProfileDetails from '../../components/UsersListProfilePage/UsersListProfileDetails';
import { handleFetchUserDetails } from '../../slices/dashboard/usersDetailsSlice';

const UsersListProfilePage = () => {
    const { isLoading } = useSelector((state) => state.userDetailsById);
    const dispatch = useDispatch();
    const { _id } = useParams();

    useEffect(() => {
        dispatch(handleFetchUserDetails(_id));

        // eslint-disable-next-line
    }, []);

    return (
        <Box
            sx={{
                py: '1rem'
            }}
        >
            {isLoading ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '80vh'
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <UsersListProfileDetails />
            )}
        </Box>
    );
};

export default UsersListProfilePage;
