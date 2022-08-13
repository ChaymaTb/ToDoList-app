import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <button className='create-todo' onClick={(e)=> setShow(true)}>Create Your to do</button>
      {(show==true) && <AddTask/>}
      
    </div>
  );
}

export default App;
