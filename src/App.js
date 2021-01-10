import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ToDo from './todolist/todo.js';
import StopWatch from './stopwatch/stopwatch.js';



class App extends Component{


  render(){
    
    return <div>
              <StopWatch></StopWatch>
          </div>;

  }
}


export default App;
