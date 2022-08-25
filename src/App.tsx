import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilteredValueType= 'all'| 'completed' | 'active'
function App() {

    const [tasks , setTasks] = useState <Array <TaskType>>( [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
    ])


    const[filter,setFilter] = useState< FilteredValueType>('all')
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

    const RemoveTask = (id: string) => {
      let filteredTasks= tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    const AddTask = (title:string) => {
        let newTask =  {id: v1(), title: title, isDone: false}
        let newTasks = [newTask,...tasks]
        setTasks(newTasks)
    }

    return (
        <Todolist
            title={"WHAT is goin on?"}
            tasks={taskForTodolist}
            RemoveTask={RemoveTask}
            ChangeFilter={ChangeFilter}
            AddTask={AddTask}


        />

    );
}

export default App;
