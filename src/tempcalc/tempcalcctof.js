import {Component} from 'react';
import TempCalcCtofsplit from "./tempcalcctofsplit.js";


//this class will determine which component to return based on the users click

class TempCalcCtof extends Component{


    state={
        input:null  
    }


    updateInput = (newValue)=>{
        this.setState({
            input:newValue
        })
    }

    render(){

            return <TempCalcCtofsplit parentstate={this.state} updateInput={this.updateInput}></TempCalcCtofsplit>
    }
}

export default TempCalcCtof; 