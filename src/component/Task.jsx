import React, { Component} from 'react';
import PropTypes from 'prop-types';



export default class Task extends Component {


    render(){
        const {task} = this.props;
        return (
               
                <div>
                    {task.description } - {task.title} - {task.id} - {task.done}   
                    <input type="checkbox"></input>
                    <button onClick={this.props.delTask.bind(this, task.id)}>x</button>
                </div>
        )}

}

Task.propTypes = {
    task: PropTypes.object.isRequired
}
