import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ToDo from './todolist/todo.js';



class App extends Component{


  render(){
    
    return <div>
              <ToDo></ToDo>
          </div>;

  }
}


export default App;
