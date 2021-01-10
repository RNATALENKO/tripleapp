
import React from 'react';
import {Component} from 'react';
import StopWatchTimer from './stopwatchtimer.js'


 class StopWatch extends Component{

    state ={
        firstplace:0,
        secondplace:0
    }


    //called by child
    update = (firstvalue) => {

        this.setState({
            firstplace:firstvalue
        }); 

    }



    render(){
        return <StopWatchTimer firstplaceprop={this.state.firstplace} updatepropf={this.update}></StopWatchTimer>
    }


}



export default StopWatch; 