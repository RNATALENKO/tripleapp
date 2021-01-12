

import {Component} from 'react';


//need a way to disable timer so that start is only hit once

class StopWatchTimer extends Component{


   //updates parent's state, and child state
   update = () =>{


            let firstvalue = this.props.parentstateprop.firstplace+1; //get the firstplace prop value, add one
            let secondvalue = this.props.parentstateprop.secondplace; 
            let thirdvalue = this.props.parentstateprop.thirdplace; 
            let fourthvalue = this.props.parentstateprop.fourthplace;
            let fifthvalue = this.props.parentstateprop.fifthplace; 
            


            //if new value is 10 reset 
            if(firstvalue>=10){

                firstvalue=0; 

                //also add one to second place
                if(secondvalue<5){
                    secondvalue+=1;
                }
                else{
                    secondvalue =0; 
                } 
            }

            //if second value hits 6, add to minute
            if(secondvalue==0 && firstvalue==0){

                if(thirdvalue==9 && firstvalue ==0 && secondvalue==0){
                    thirdvalue=0;
                    fourthvalue+=1;
                }
                else{
                    thirdvalue+=1; 
                }
            }



            if(fourthvalue>=6){
                fourthvalue=0;

                if(fifthvalue<23){
                    fifthvalue+=1;
                }
                else if(fifthvalue<=23){
                    firstvalue=0; secondvalue=0;thirdvalue=0;fourthvalue=0;fifthvalue=0;
                }  
            }


            //update parent state with new value
            this.props.updatepropf(firstvalue, secondvalue, thirdvalue, fourthvalue, fifthvalue);

            //if first place hits 9, go to 1, and add 1 to second place

   }

   startTimer = () =>{
        //continuous update
        setInterval(this.update, 1000);
   }
   
   start = ()=>{

        this.startTimer();
        //disable start button
        document.getElementById('startbtn').disabled="true";

   }





   render(){

       return <div>
                <div>
                    <span>{this.props.parentstateprop.fifthplace}</span>
                    <span>:</span>
                    <span>{this.props.parentstateprop.fourthplace}</span>
                    <span>{this.props.parentstateprop.thirdplace}</span>
                    <span>:</span>
                    <span>{this.props.parentstateprop.secondplace}</span>
                    <span>{this.props.parentstateprop.firstplace}</span>
                </div>
                <div>
                    <button id="startbtn" onClick={this.start}>start</button>
                    <button id="pausebtn">pause</button>
                    <button>reset</button>
                </div>
       </div>
       
           
   }


}



export default StopWatchTimer; 