import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchToDos } from '../JS/filterSlice';
import '../style/filter.css'
import AddTask from './AddTask';
import ListTask from './ListTask';

const FilterTask = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispatch= useDispatch();
  return (
    <div className='bttns'>
        <select className='filter-selector' onChange={(e)=>dispatch(searchToDos(e.target.value))}>
          <option className='select-op' value="all">All</option>
          <option className='select-op' value="done">Done</option>
          <option className='select-op' value="undone">Undone</option>
        </select>
        
    </div>
  )
}

export default FilterTask