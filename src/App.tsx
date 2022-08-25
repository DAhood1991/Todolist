import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilteredValueType= 'all'| 'completed' | 'active'
function App() {

    const [tasks , setTasks] = useState <Array <TaskType>>( [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
    ])

    let [filter,setFilter] = useState< FilteredValueType>('all')
    let taskForTodolist = tasks
    if (filter === "active"){
        taskForTodolist = tasks.filter(t =>t.isDone === false)
    }
    if (filter === "completed"){
        taskForTodolist = tasks.filter(t=>t.isDone ===true)
    }
    const ChangeFilter = (value:FilteredValueType) => {
        setFilter(value)

    }

    const RemoveTask = (id: number) => {
      let filteredTasks= tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    return (
        <Todolist
            title={"WHAT is goin on?"}
            tasks={taskForTodolist}
            RemoveTask={RemoveTask}
            ChangeFilter={ChangeFilter}

        />

    );
}

export default App;
