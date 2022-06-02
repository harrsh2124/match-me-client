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
    error: null
};

export const userSignInSlice = createSlice({
    name: 'userSignIn',
    initialState,
    reducers: {},
    extraReducers: {
        [handleUserSignIn.pending]: (state, action) => {
            state.isLoading = true;
        },
        [handleUserSignIn.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [handleUserSignIn.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = _.get(action, 'payload.data.message', 'Something went wrong.');
        }
    }
});

const userSignInReducer = userSignInSlice.reducer;
export default userSignInReducer;
