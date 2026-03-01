import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        // Reducer placeholders
    },
});

export const { } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
