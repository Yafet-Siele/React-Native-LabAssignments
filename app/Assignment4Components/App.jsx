import React, { useState } from 'react';
import ToDoForm from './ToDoForm';  

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (NewTask) => {
    setTasks([...tasks, NewTask]);
  };

  return (
    <div style={{marginLeft: "20px"}}>
      <h1>To-Do List</h1>

      <ToDoForm addTask={addTask} />

      <ul style={{marginLeft: "20px", alignContent: "center", marginTop:'10px', gap: '10px'}} >
        {tasks.map((task, index) => (
          <p style={{backgroundColor: 'lightblue', padding:"20px", marginRight: '100px'}} key={index}>{task}</p>  
        ))}
      </ul>
    </div>
  );
};

export default Task;
