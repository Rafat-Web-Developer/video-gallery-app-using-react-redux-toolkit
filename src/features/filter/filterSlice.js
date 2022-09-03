const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    author: "",
    pageNumber: 1
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        authorName: (state, action) => {
            state.author = action.payload;
        },
        pageSelect: (state, action) => {
            state.pageNumber = action.payload;
        },
        clearFilter: (state) => {
            state.tags = [];
            state.search = "";
            state.author = "";
            state.pageNumber = 1;
        },
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, pageSelect, authorName, clearFilter } = filterSlice.actions;
