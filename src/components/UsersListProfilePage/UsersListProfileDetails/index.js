import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { RANDOM_USER_PROFILE_URL } from '../../../config/constants';
import styles from './usersListProfileDetails.module.css';

const UsersListProfile = (props) => {
    return (
        <Container
            maxWidth="xs"
            sx={{
                display: 'flex',
                flexFlow: 'column'
            }}
        >
            <Box
                component="img"
                src={RANDOM_USER_PROFILE_URL}
                sx={{
                    borderRadius: '100%',
                    mx: 'auto'
                }}
            />

            <Box className={styles.userName}>
                <Typography>John</Typography>
                <Typography>Doe</Typography>
            </Box>
        </Container>
    );
};

export default UsersListProfile;
