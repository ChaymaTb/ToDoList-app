import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const toDoSlice = createSlice({
    //Name of our state
    name: 'tasks',
    initialState,
    reducers: {
        //we will write our reducer 
        //Adding Task
        addToDos: (state, action) => {
            const newtask = {
                id: Date.now(),
                description: action.payload.description,
                isDone: false
            }
            state.push(newtask);
        },
        
        //Removing Task
        removeToDos: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },

        //Updating Task
        updateToDos: (state, action) => {
            return state.map(el => (el.id === action.payload.id) ? action.payload : el)
        },
        //Task is done
        completToDos: (state, action) => {
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        isDone: true,
                    }
                }
                return task;
            })
        }
    },
})

export const { addToDos, removeToDos, updateToDos, completToDos } = toDoSlice.actions;
export default toDoSlice.reducer;
