import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserSignInApi } from '../../api/userAuthApi';

export const handleUserSignIn = createAsyncThunk(
    'auth/signin',
    async (body, { rejectWithValue }) => {
        try {
            const data = await UserSignInApi(body);
            return { data };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    isLoading: false,
    error: null,
    token: ''
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
            state.token = action.payload.token;
        },
        [handleUserSignIn.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.data.message;
        }
    }
});

const userSignInReducer = userSignInSlice.reducer;
export default userSignInReducer;
