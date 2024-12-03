import React from 'react';

function ToDoList({ tasks }) {
    if (!tasks) {
        return;
    }
    
    return (
    <main>
        {tasks.map((task, index) => (
            <p key={index}>{task} incomplete </p>
        ))}</main>
    );
}

export default ToDoList;
