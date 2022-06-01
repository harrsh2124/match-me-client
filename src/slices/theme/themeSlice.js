import { createSlice } from '@reduxjs/toolkit';
import { APP_PREFIX } from '../../config/constants';

const initialState = {
    mode: localStorage.getItem(`${APP_PREFIX}-theme`) || 'dark'
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const toggledTheme = state.mode === 'light' ? 'dark' : 'light';
            state.mode = toggledTheme;
            localStorage.setItem(`${APP_PREFIX}-theme`, toggledTheme);
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;
export default themeReducer;
