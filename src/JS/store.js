import { configureStore } from '@reduxjs/toolkit'
import toDoSlice  from './toDoSlice'
import searchSlice from './filterSlice'

const store = configureStore({
    reducer:{
        tasks:toDoSlice,
        search:searchSlice,
    }
})

export default store;
