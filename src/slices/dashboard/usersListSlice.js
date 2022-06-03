import _ from 'lodash';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetUsersApi } from '../../api/getUsersApi';

export const handleFetchUsersList = createAsyncThunk(
    'dashboard/users',
    async (params, { rejectWithValue }) => {
        try {
            return await GetUsersApi(params);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    isLoading: false,
    isCompleted: false,
    error: null,
    users: []
};

export const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {},
    extraReducers: {
        [handleFetchUsersList.pending]: (state, action) => {
            state.isCompleted = false;
            state.isLoading = true;
        },
        [handleFetchUsersList.fulfilled]: (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.isCompleted = true;
            state.users = _.get(action, 'payload.data.data.result', []);
        },
        [handleFetchUsersList.rejected]: (state, action) => {
            state.error = _.get(action, 'payload.data.message', 'Something went wrong.');
            state.isLoading = false;
            state.isCompleted = true;
        }
    }
});

const usersListReducer = usersListSlice.reducer;
export default usersListReducer;
