
import { useState } from "react"
import ToDoList from "./ToDoList"


const ToDoForm = () => {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    return(
        <main>
            <ToDoList tasks={tasks} />
        </main>
    )
}

export default ToDoForm;