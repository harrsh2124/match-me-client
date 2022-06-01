import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APP_NAME } from '../../config/constants';
import { toggleTheme } from '../../slices/theme/themeSlice';

const Navbar = () => {
    const { mode } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                mb: '4rem'
            }}
        >
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            textTransform: 'capitalize',
                            cursor: 'pointer'
                        }}
                    >
                        {APP_NAME}
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1
                        }}
                    />

                    <Box>
                        <IconButton
                            size="large"
                            aria-label="Account of current user"
                            aria-controls="user-icon"
                            aria-haspopup="true"
                            onClick={() => dispatch(toggleTheme())}
                            color="inherit"
                        >
                            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
