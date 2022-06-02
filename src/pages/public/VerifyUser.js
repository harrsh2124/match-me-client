import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';

const VerifyUser = () => {
    const [searchParams] = useSearchParams();
    const isEmailSent = searchParams.get('emailSent');

    return Boolean(isEmailSent) ? (
        <Box
            sx={{
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                height: '93%'
            }}
        >
            <CircularProgress />

            <Typography component="div" variant="h5">
                Please wait while we verify you...
            </Typography>
        </Box>
    ) : (
        <Navigate to="/signin" />
    );
};

export default VerifyUser;
