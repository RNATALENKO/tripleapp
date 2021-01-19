import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import ToDo from './todolist/todo.js';
import StopWatch from './stopwatch/stopwatch.js';
import TempCalc from './tempcalc/tempcalc.js';



class App extends Component{


  render(){
    
    return <div style={{display:"flex"}}>
              <div style={{padding:"20px"}}><ToDo></ToDo></div>
              <div style={{padding:"20px"}}><StopWatch></StopWatch></div>
              <div style={{padding:"20px"}}><TempCalc></TempCalc></div>
          </div>;

  }
}

export default App;
