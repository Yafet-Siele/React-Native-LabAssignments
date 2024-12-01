import React, { useState } from 'react';

function ToDoForm({ addTask }) {
  const [NewTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    addTask(NewTask); 
    setNewTask(''); 
  };

  return (
    <div >
      <input style={{marginLeft: '10px', padding: '10px', borderRadius: '5px'}} type="text" placeholder="Add a new task" value={NewTask}
        onChange={(handleChange)} 
      />
      <button style={{marginLeft: '10px', padding: '10px', backgroundColor:'blue', borderColor: 'lightblue', color:'white', borderRadius: '5px'}} onClick={handleSubmit} type='submit'>Add Task</button>
    </div>
  );
}

export default ToDoForm;
