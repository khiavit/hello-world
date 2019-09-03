import React, { Component} from 'react';
import Task from './Task';

export default class Tasks extends Component{

    render(){
        return (
            <div>

                {this.props.tareas.map( tarea => 
                <Task 
                    key={tarea.id} 
                    task={tarea} 
                    delTask={this.props.delTask}/>)}  
            </div>
        )
    }               
}