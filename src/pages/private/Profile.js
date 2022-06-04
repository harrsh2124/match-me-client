import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OtherProfileDetails from '../../components/dashboard/otherProfileDetails';

const Profile = () => {
    const { isLoading } = useSelector((state) => state.userDetailsById);

    useEffect(() => {
        // dispatch(handleFetchUserDetails(_id));
        // eslint-disable-next-line
    }, []);

    return (
        <Box
            sx={{
                py: '1rem'
            }}
        >
            {!isLoading ? (
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
                <OtherProfileDetails />
            )}
        </Box>
    );
};

export default Profile;
