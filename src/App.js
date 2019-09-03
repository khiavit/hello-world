import React from 'react';
import './App.css';
import Tasks from './component/Tasks'
import tasks from './sample/tasks.json';
import  { Component} from 'react';
import TaskForm from './component/TaskForm';



export default class App extends Component {

state = {
  task:tasks
} 

addTask = (title,description) => {
  const newTask = {
    title: title,
    description: description,
    id : this.state.task.length
  }
  this.setState({
    task: [...this.state.task,newTask]
  })
}


delTask = (id) => {

  const newArray =  this.state.task.filter(task => task.id !== id );
  this.setState({
   task:newArray
  })
}



  render () {
    return (
      <div className="App">
        <TaskForm addTask={this.addTask}/>
        <Tasks tareas ={this.state.task}  delTask= {this.delTask}/>
    </div>
    )
  }
}