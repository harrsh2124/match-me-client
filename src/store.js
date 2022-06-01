import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme/themeSlice';

const logger = createLogger({
    duration: true,
    diff: true
});

const middleware = [];
middleware.push(logger);
middleware.push(thunk);
const enhancers = [...middleware];

export const store = configureStore({
    reducer: {
        theme: themeReducer
    },
    middleware: enhancers
});
