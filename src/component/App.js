import React from "react";
import {Component} from "react";

import 'src/style/index.css'
import {TaskAdd} from "./TaskAdd";

export class App extends Component {

    render() {
        return (
            <div className='Conteiner'>
                TODO App
                <TaskAdd/>
            </div>
        )
    }
}
