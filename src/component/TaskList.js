import React from "react";
import {Task} from "./Task";

export const TaskList = (props) => {

    const tasks = props.tasks.map(task => {
        return <Task key={task.id} task={task}/>
    })

    return <>
        <div className='task-list__active'>
            <h3>Task Active</h3>
            {tasks}
        </div>
        <hr/>
        <div className='task-list__done'>
            <h3>Task Done (0)</h3>
        </div>
    </>
}