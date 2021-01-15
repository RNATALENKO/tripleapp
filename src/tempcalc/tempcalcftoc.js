import {Component} from 'react';
import TempCalcFtocsplit from './tempcalcftocsplit';




//this class will determine which component to return based on the users click

class TempCalcFtoc extends Component{

    state={
        input:null,
    }

    updateCelcius=(newValue)=>{
        this.setState({
            celcius:newValue
        })
    }

    updateInput=(newValue) => {
        this.setState({
            input:newValue
        })
    }

    render(){
            return <TempCalcFtocsplit updateCelcius={this.updateCelcius} parentstate={this.state} updateInput={this.updateInput}></TempCalcFtocsplit>
    }
}

export default TempCalcFtoc; 