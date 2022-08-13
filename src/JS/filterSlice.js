import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: 'all',
    reducers: {
    searchToDos:(state, action)=>{
    return action.payload
    },
}
})

export const { searchToDos } = searchSlice.actions;
export default searchSlice.reducer;
