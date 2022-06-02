import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { UserSignUpApi } from '../../api/userAuthApi';

export const handleUserSignUp = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            await UserSignUpApi(body);
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

export const userSignUpSlice = createSlice({
    name: 'userSignUp',
    initialState,
    reducers: {},
    extraReducers: {
        [handleUserSignUp.pending]: (state, action) => {
            state.isCompleted = false;
            state.isLoading = true;
        },
        [handleUserSignUp.fulfilled]: (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.isCompleted = true;
        },
        [handleUserSignUp.rejected]: (state, action) => {
            state.error = _.get(action, 'payload.data.message', 'Something went wrong.');
            state.isLoading = false;
            state.isCompleted = true;
        }
    }
});

const userSignUpReducer = userSignUpSlice.reducer;
export default userSignUpReducer;
