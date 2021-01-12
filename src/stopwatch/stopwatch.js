
import React from 'react';
import {Component} from 'react';
import StopWatchTimer from './stopwatchtimer.js'


 class StopWatch extends Component{

    state ={
        firstplace:0,
        secondplace:0,
        thirdplace: 0, 
        fourthplace:0,
        fifthplace:0,
    }

    //called by child
    update = (firstvalue, secondvalue, thirdvalue, fourthvalue, fifthvalue) => {

        this.setState({
            firstplace:firstvalue,
            secondplace:secondvalue,
            thirdplace: thirdvalue,
            fourthplace: fourthvalue,
            fifthplace: fifthvalue,
        }); 

    }

    render(){
        return <StopWatchTimer parentstateprop={this.state} updatepropf={this.update}></StopWatchTimer>
    }


}



export default StopWatch; 