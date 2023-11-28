import React from "react";
import {TaskList} from "./TaskList";
import {TaskAdd} from "./TaskAdd";
import {Component} from "react";

import 'src/style/App.css'

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
        ]
    }

    render() {
        return (
            <div className='App__conteiner'>
                TO DO App
                <TaskAdd/>
                <TaskList/>
            </div>
        )
    }
}
