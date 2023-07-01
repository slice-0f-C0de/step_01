import React from "react";

type TodolistPropsType = {
    header: string
    tasks: TaskType[]
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.header}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {props.tasks.map((el) => {
                    return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}
            </ul>

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}