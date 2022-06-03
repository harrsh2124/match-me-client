import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme/themeSlice';
import userSignInReducer from './slices/auth/signInUserSlice';
import userSignUpReducer from './slices/auth/signUpUserSlice';
import usersListReducer from './slices/dashboard/usersListSlice';

const logger = createLogger({
    duration: true,
    diff: true
});

const middleware = [logger, thunk];

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        userSignIn: userSignInReducer,
        userSignUp: userSignUpReducer,
        usersList: usersListReducer
    },
    middleware
});
