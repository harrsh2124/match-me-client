import _ from 'lodash';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserSignInApi } from '../../api/userAuthApi';

export const handleUserSignIn = createAsyncThunk(
    'auth/signin',
    async (body, { rejectWithValue }) => {
        try {
            await UserSignInApi(body);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    isLoading: false,
    isCompleted: false,
    error: null
};

export const userSignInSlice = createSlice({
    name: 'userSignIn',
    initialState,
    reducers: {},
    extraReducers: {
        [handleUserSignIn.pending]: (state, action) => {
            state.isCompleted = false;
            state.isLoading = true;
        },
        [handleUserSignIn.fulfilled]: (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.isCompleted = true;
        },
        [handleUserSignIn.rejected]: (state, action) => {
            state.error = _.get(action, 'payload.data.message', 'Something went wrong.');
            state.isLoading = false;
            state.isCompleted = true;
        }
    }
});

const userSignInReducer = userSignInSlice.reducer;
export default userSignInReducer;
