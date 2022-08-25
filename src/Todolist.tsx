import React from "react";
import {FilteredValueType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: Array<TaskType>
    RemoveTask:(id:number)=>void
    ChangeFilter:(value:FilteredValueType)=>void



}
export const Todolist = (props: TodolistType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
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