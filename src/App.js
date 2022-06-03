import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import IndexRouter from './utils/router/IndexRouter';
import { darkTheme, lightTheme } from './utils/theme';

const App = () => {
    const { mode } = useSelector((state) => state.theme);

    return (
        <BrowserRouter>
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                <CssBaseline />

                <Box
                    sx={{
                        height: '100vh'
                    }}
                >
                    <Navbar />

                    <IndexRouter />
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
