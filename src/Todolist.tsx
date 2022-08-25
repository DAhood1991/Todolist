import React, {useState} from "react";
import {FilteredValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: Array<TaskType>
    RemoveTask:(id:string)=>void
    ChangeFilter:(value:FilteredValueType)=>void
    AddTask:(title:string)=>void



}
export const Todolist = (props: TodolistType) => {
    let [title,setTitle]=useState('')
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={(event)=>{setTitle(event.currentTarget.value)}}/>
                <button onClick={()=>{props.AddTask(title)}}>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    return (<li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={()=>{props.RemoveTask(t.id)}}>x
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>{props.ChangeFilter('all')}}>All</button>
                <button onClick={()=>{props.ChangeFilter('active')}}>Active</button>
                <button onClick={()=>{props.ChangeFilter('completed')}}>Completed</button>
            </div>
        </div>
    )
}