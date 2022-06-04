import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { GetUserDetailsByIdApi } from '../../api/getUsersApi';

export const handleFetchUserDetails = createAsyncThunk(
    'dashboard/users',
    async (_id, { rejectWithValue }) => {
        try {
            return await GetUserDetailsByIdApi(_id);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    isLoading: true,
    isCompleted: false,
    error: null,
    user: null
};

export const usersDetailsSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {},
    extraReducers: {
        [handleFetchUserDetails.pending]: (state, action) => {
            state.isCompleted = false;
            state.isLoading = true;
        },
        [handleFetchUserDetails.fulfilled]: (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.isCompleted = true;
            state.user = _.get(action, 'payload.data.data.user', null);
        },
        [handleFetchUserDetails.rejected]: (state, action) => {
            state.error = _.get(action, 'payload.data.message', 'Something went wrong.');
            state.isLoading = false;
            state.isCompleted = true;
        }
    }
});

const userDetailsByIdReducer = usersDetailsSlice.reducer;
export default userDetailsByIdReducer;
