import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilteredValueType} from "./App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: Array<TaskType>
    RemoveTask: (id: string) => void
    ChangeFilter: (value: FilteredValueType) => void
    AddTask: (title: string) => void


}
export const Todolist = (props: TodolistType) => {
    let [title, setTitle] = useState('')
    const AddTask = () => {
        props.AddTask(title)
        setTitle('')
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter")
            AddTask()
    }
    const ChangeFilterxAll = () => {
        props.ChangeFilter('all')
    }
    const ChangeFilterxComplete = () => {
        props.ChangeFilter('completed')
    }
    const ChangeFilterxActive = () => {
        props.ChangeFilter('active')
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={AddTask}>+</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    const onClickHandler = () => {
                        props.RemoveTask(t.id)
                    }
                    return (<li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>x
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={ChangeFilterxAll}>All</button>
                <button onClick={ChangeFilterxActive}>Active</button>
                <button onClick={ChangeFilterxComplete}>Completed</button>
            </div>
        </div>
    )
}