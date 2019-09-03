import React, { Component} from 'react';



export default class TaskForm extends Component {

    state={
        title:'',
        description:''
    }

    onChange = (e) =>   {
       this.setState({
            [e.target.name]:e.target.value
       })
       console.log(e.target.name,e.target.value)    
    }


    onSubmit = (e) => {
        this.props.addTask(this.state.title,this.state.description);
        e.preventDefault();
    }


    render(){
        
        return (

                <form onSubmit={this.onSubmit}>
                    <input name="title" type="text" placeholder ="write a task" onChange={this.onChange} value={this.state.title}></input>
                    <br/>
                    <textarea name="description" placeholder="write a description" onChange={this.onChange} value={this.state.description}></textarea>
                    <br></br>
                    <button  type="submit">Enviar</button>
                </form>
       
        );
    }

}



