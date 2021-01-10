

import {Component} from 'react';


//need a way to disable timer so that start is only hit once

class StopWatchTimer extends Component{


   state ={
       firstplace: this.props.firstplaceprop
   }


   //updates parent's state, and child state
   update = () =>{


            let firstvalue = this.props.firstplaceprop+1; //get the firstplace prop value, add one

            //if new value is 10 reset 
            if(firstvalue==10){
                
                firstvalue=1; 

                //also add one to second place
            }

            //update parent state with new value
            this.props.updatepropf(firstvalue);

            //also update this state with new value
            this.setState({
                firstplace:firstvalue
            })

            //if first place hits 9, go to 1, and add 1 to second place


   }


   start = ()=>{
        //continuous update
        setInterval(this.update, 950);

        //disable start button
        document.getElementById('startbtn').disabled="true";
   }




   render(){

       return <div>
                <div>
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>{this.props.firstplaceprop}</span>
                </div>
                <div>
                    <button id="startbtn" onClick={this.start}>start</button>
                    <button>pause</button>
                    <button>reset</button>

                </div>
       </div>
       
           
   }


}



export default StopWatchTimer; 