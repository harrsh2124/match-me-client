import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark'
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;
export default themeReducer;
