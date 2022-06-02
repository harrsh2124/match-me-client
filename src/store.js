import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme/themeSlice';
import userSignInReducer from './slices/auth/signInUserSlice';

const logger = createLogger({
    duration: true,
    diff: true
});

const middleware = [logger, thunk];

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        userSignIn: userSignInReducer
    },
    middleware
});
