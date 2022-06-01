import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { darkTheme } from './utils/theme';

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <Typography component="p">Hello sir...</Typography>
        </ThemeProvider>
    );
};

export default App;
