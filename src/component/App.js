import React from "react";
import {TaskList} from "./TaskList";
import {TaskAdd} from "./TaskAdd";
import {Component} from "react";

import '../style/App.css'

export class App extends Component {

    state = {
        tasks: [
            {
                id: 0,
                text: 'Isc do sklepu',
                date: '2023-11-28',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 1,
                text: 'zrobić angielski',
                date: '2023-11-28',
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 2,
                text: 'Isc na siłownie',
                date: '2023-11-28',
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: 'Pakować sie',
                date: '2023-11-28',
                important: true,
                active: true,
                finishDate: '2023-12-08',
            },
        ]
    }

    render() {
        return (
            <div className='App__conteiner'>
                TO DO App
                <TaskAdd/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}
