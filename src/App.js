import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './utils/theme';

const App = () => {
    const { mode } = useSelector((state) => state.theme);

    return (
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />

            <Typography component="p">Hello sir...</Typography>
        </ThemeProvider>
    );
};

export default App;
