import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const header = "What to learn"

    let task1 = [
        {id:1, title: "HTML", isDone: true},
        {id:2, title: "CSS", isDone: true},
        {id:3, title: "JavaScript", isDone: false}
    ]

    let task2 = [
        {id:1, title: "Pulp Fiction", isDone: true},
        {id:2, title: "Kill Bill vol. 1/2", isDone: true},
        {id:3, title: "Once Upon a Time... in Hollywood", isDone: true}
    ]

    return (
        <div className="App">
            <Todolist header={header} tasks={task1}/>
            <Todolist header={"Movies"} tasks={task2}/>
        </div>
    );
}

export default App;
