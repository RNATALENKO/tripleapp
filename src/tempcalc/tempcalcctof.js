import {Component} from 'react';


//this class will determine which component to return based on the users click

class TempCalcCtof extends Component{


    state={
       
    }


    render(){

          

            return <div style={{padding:"10px"}}>
                        <br></br>
                        <label>Celcius:</label>
                        <input style={{display:"block"}}></input>
                        <button style={{display:"block"}}>Get farenheit</button>
                        <label>Farenheit: </label>
                        <div>{this.props.tempcalcstate.farenheit}</div>
                    </div>
    }
}

export default TempCalcCtof; 