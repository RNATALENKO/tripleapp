import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ToDo from './todolist/todo.js';
import StopWatch from './stopwatch/stopwatch.js';
import TempCalc from './tempcalc/tempcalc.js';



class App extends Component{


  render(){
    
    return <div>
              <TempCalc></TempCalc>
          </div>;

  }
}


export default App;
