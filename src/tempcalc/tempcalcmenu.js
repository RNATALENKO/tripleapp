import {Component} from 'react';
import TempCalcCtof from './tempcalcctof';
import TempCalcFtoc from './tempcalcftoc';



//this class passes methods and state to it's child menu

class TempCalcMenu extends Component{


    state={
        menu:null
    }

   
/*this doesn't actually render or return the updated prop what's the solution?? */
    ftoc = <TempCalcFtoc></TempCalcFtoc>; 
    ctof = <TempCalcCtof></TempCalcCtof>;



    
    //sets the menu jsx menu to appear in tempcalc.js
    sendFtoc = ()=>{

        this.setState({
            menu:this.ftoc
        })
    }

    sendCtof = ()=>{
        this.setState({
            menu:this.ctof
        })
    }
    

    render(){

            return <div>
                        <a onClick={this.sendFtoc} href="#" style={{marginRight:"20px"}}>Farenheit to Celcius</a>
                        <a onClick={this.sendCtof} href="#">Celcius to Farenheiht</a>
                        {this.state.menu}
                   </div>
    }
}

export default TempCalcMenu; 