import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { RANDOM_USER_PROFILE_URL } from '../../../config/constants';
import styles from './usersListProfileDetails.module.css';

const UsersListProfile = (props) => {
    return (
        <Container
            maxWidth="sm"
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

            <Box className={styles.heading}>Personal Details</Box>
            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>Date of birth -</Typography>
                    <Typography>21 December 1998</Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>Age -</Typography>
                    <Typography>23</Typography>
                </Box>
            </Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>Height -</Typography>
                    <Typography>5ft 8in</Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>Weight -</Typography>
                    <Typography>80 kgs</Typography>
                </Box>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>Birth time -</Typography>
                <Typography>10.00pm</Typography>
            </Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>Birth city -</Typography>
                    <Typography>Ahmedabad, Gujarat, India</Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>Native city -</Typography>
                    <Typography>Ahmedabad</Typography>
                </Box>
            </Box>

            <Box
                className={styles.flexDetail}
                sx={{
                    mt: '1rem'
                }}
            >
                <Typography>Education -</Typography>
                <Typography>B.Tech in Computer Engineering</Typography>
            </Box>

            <Box className={styles.flexDetail}>
                <Typography>Current occupation -</Typography>
                <Typography>Software Developer</Typography>
            </Box>

            <Box
                className={styles.flexDetail}
                sx={{
                    mb: '1rem'
                }}
            >
                <Typography>Annual income -</Typography>
                <Typography>10,00,000 INR</Typography>
            </Box>

            <Box className={styles.containerFlex}>
                <Box className={styles.flexDetail}>
                    <Typography>Manglik -</Typography>
                    <Typography>No</Typography>
                </Box>

                <Box className={styles.flexDetail}>
                    <Typography>Marital status -</Typography>
                    <Typography>Single</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default UsersListProfile;
