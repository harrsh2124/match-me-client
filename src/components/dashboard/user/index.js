import _ from 'lodash';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RANDOM_USER_PROFILE_URL } from '../../../config/constants';
import './index.css';

const User = (props) => {
    const navigate = useNavigate();
    const { user } = props;

    const { mode } = useSelector((state) => state.theme);

    return (
        <Box className="user-container">
            <Box
                component="img"
                src={RANDOM_USER_PROFILE_URL}
                sx={{
                    borderRadius: '100%'
                }}
            />

            <Box className="user-text-container">
                <Box className="user-name">
                    <Typography>{user.firstName}</Typography>
                    <Typography>{user.lastName}</Typography>
                    <Typography>{user.email}</Typography>
                </Box>

                <Box className="user-details">
                    <Typography>Age: 21</Typography>
                    <Typography>Education: B.Tech</Typography>
                    <Typography>Occupation: Software Developer</Typography>
                </Box>

                <Box className="user-location">
                    <Typography>City: Ahmedabad</Typography>
                    <Typography>State: Gujarat</Typography>
                    <Typography>Country: India</Typography>
                </Box>
            </Box>

            <Box
                className={`view-profile-button ${
                    mode === 'light' ? 'light-button' : 'dark-button'
                }`}
                onClick={() => navigate(`/profile/${_.get(user, '_id')}`)}
            >
                <Typography>View Profile</Typography>
            </Box>
        </Box>
    );
};

export default User;
