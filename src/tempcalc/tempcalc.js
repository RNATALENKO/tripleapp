import {Component} from 'react';
import TempCalcFtoc from './tempcalcftoc.js';
import TempCalcCtof from './tempcalcctof.js';
import TempCalcMenu from './tempcalcmenu.js';


//this class will determine which menu/calculator to return based on the users click
class TempCalc extends Component{

    state={
        menu: null,
    }

    update = (newValue)=>{
        this.setState({
            menu:newValue
        });
    }


    render(){


            return <span style={{display:"inline"}}>
                        <TempCalcMenu updatefunc={this.update} tempcalcstate={this.state} updateTempWrapper={this.updateTempWrapper}></TempCalcMenu>
                   </span>
    }
}

export default TempCalc; 