import React from "react";

export const Task = (props) => {

    const {text,date} = props.task;

    return <>
        <div>
            <p>
                <strong>{text}</strong> - do <span>{date}</span>
                <button onClick={() => console.log('Działa')}>Zostało zrobione</button>
                <button onClick={() => console.log('Nie działa')}>X</button>
            </p>
        </div>
    </>
}
