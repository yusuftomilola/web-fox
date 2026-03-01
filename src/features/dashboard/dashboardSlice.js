import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stats: {},
    loading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        // Reducer placeholders
    },
});

export const { } = dashboardSlice.actions;
export default dashboardSlice.reducer;
