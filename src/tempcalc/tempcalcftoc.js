import {Component} from 'react';




//this class will determine which component to return based on the users click

class TempCalcFtoc extends Component{


    convertToC = (number)=>{
        return (number -32)*.5556
    }




    updateParent = ()=>{
        
       console.log( this.props.updateTempMethods);
       this.props.updateTempMethods.updateCelcius(1);
    }



    render(){



            return <div style={{padding:"10px"}}>
                        <br></br>
                        <label>Farenheit:</label>
                        <input type="number" style={{display:"block"}}></input>
                        <button style={{display:"block"}} onClick={this.updateParent}>Get Celcius</button>
                        <label>Celcius: </label>
                        <div>{this.props.tempcalcstate.celcius}</div>
                    </div>
    }
}

export default TempCalcFtoc; 