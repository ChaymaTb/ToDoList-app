import React, { useState } from 'react'
import '../style/addTask.css'
import { addToDos } from '../JS/toDoSlice';
import ListTask from './ListTask';
import { useDispatch } from "react-redux"
import FilterTask from './FilterTask';
import '../style/listtask.css'


const AddTask = () => {
    const [toDo, setToDo] = useState("")
    
    const dispatch = useDispatch()

    return (
        <div className='add-task'>
            <div className='cont'>
                <input className='input-add' type="text" placeholder='Enter your task' onChange={(e) => setToDo(e.target.value)} />
                <button className='add btn' onClick={() => dispatch(addToDos({
                    id: Date.now(),
                    description: toDo,
                    isDone: false}))}>Add</button>
                    <FilterTask />
            </div>
            <div className='list-task'>
                <ListTask />
            </div>
        </div>
    )
}

export default AddTask;