import { Box, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RANDOM_USER_PROFILE_URL } from '../../../config/constants';
import styles from './userCard.module.css';

const UserCard = (props) => {
    const navigate = useNavigate();
    const { user } = props;

    const { mode } = useSelector((state) => state.theme);

    return (
        <Box className={styles.userContainer}>
            <Box
                component="img"
                src={RANDOM_USER_PROFILE_URL}
                sx={{
                    borderRadius: '100%'
                }}
            />

            <Box className={styles.userTextContainer}>
                <Box className={styles.userName}>
                    <Typography>{user.firstName}</Typography>
                    <Typography>{user.lastName}</Typography>
                    <Typography>{user.email}</Typography>
                </Box>

                <Box className={styles.userDetails}>
                    <Typography>Age: 21</Typography>
                    <Typography>Education: B.Tech</Typography>
                    <Typography>Occupation: Software Developer</Typography>
                </Box>

                <Box className={styles.userLocation}>
                    <Typography>City: Ahmedabad</Typography>
                    <Typography>State: Gujarat</Typography>
                    <Typography>Country: India</Typography>
                </Box>
            </Box>

            <Box
                className={`${styles.viewProfileButton} ${
                    mode === 'light' ? styles.lightButton : styles.darkButton
                }`}
                onClick={() => navigate(`/profile/${_.get(user, '_id')}`)}
            >
                <Typography>View Profile</Typography>
            </Box>
        </Box>
    );
};

export default UserCard;
