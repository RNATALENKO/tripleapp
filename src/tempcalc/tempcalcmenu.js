import {Component} from 'react';
import TempCalcCtof from './tempcalcctof';
import TempCalcFtoc from './tempcalcftoc';



//this class will determine which component to return based on the users click

class TempCalcMenu extends Component{


    state={
        farenheit:0,
        celcius:100000000,
    }

    


    //functions that will calculate farenheit
    updateTempMethods = {

        updateFarenheit: (newValue)=>{
            this.setState({
                farenheit:newValue,
            })
        },
    
        updateCelcius: (newValue)=>{
            this.setState({
                celcius:newValue,
            })
        }
    }

   
/*this doesn't actually render or return the updated prop what's the solution?? */
    ftoc = <TempCalcFtoc tempcalcstate={this.state} updateTempMethods={this.updateTempMethods}></TempCalcFtoc>; 
    ctof = <TempCalcCtof tempcalcstate={this.state} updateTempMethods={this.updateTempMethods}></TempCalcCtof>;



    //sets the menu to appear
    sendFtoc = ()=>{
        this.props.updatefunc(this.ftoc);
    }

    sendCtof = ()=>{
        this.props.updatefunc(this.ctof);
    }
    
    render(){

            return <div>
                        <a onClick={this.sendFtoc} href="#" style={{marginRight:"20px"}}>Farenheit to Celcius</a>
                        <a onClick={this.sendCtof} href="#">Celcius to Farenheiht</a>
                   </div>
    }
}

export default TempCalcMenu; 