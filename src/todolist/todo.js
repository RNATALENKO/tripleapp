import {Component} from 'react'; 
import ToDoList from './todolist.js';
import './todo.css';




class ToDo extends Component {

    state = {
        input: "default value"
    }

    //function that will update this state with new parameter
    update = (param)=>{
        this.setState({
            input:param
        });
    }

    //send the input value and props func down to child
    render(){
        return <ToDoList inputprop={this.state.input} updatepropf={this.update}></ToDoList>;
    }
}

export default ToDo; 