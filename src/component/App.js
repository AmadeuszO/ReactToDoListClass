import React from "react";
import {TaskList} from "./TaskList";
import {TaskAdd} from "./TaskAdd";
import {Component} from "react";

import 'src/style/App.css'

export class App extends Component {

    render() {
        return (
            <div className='Conteiner'>
                TO DO App
                <TaskAdd/>
                <TaskList/>
            </div>
        )
    }
}
