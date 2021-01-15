import {Component} from 'react';




//this class will determine which component to return based on the users click

class TempCalcFtocsplit extends Component{


    state={
        input:this.props.parentstate.input,
    }


    convertToC = (number)=>{
        return (number -32)*.5556
    }

    getInput = (event)=>{
        this.setState({
            input:event.target.value
        })
    }

    //this isn't actually updating or rendering anything to the screen, because the jsx isn't inside the render() function
    updateParent = ()=>{

        if(this.state.input!=null){
            let celcius = this.convertToC(this.state.input);
            this.props.updateInput(celcius);
        }
        
    }



    render(){

            return <div style={{padding:"10px"}}>
                        <br></br>
                        <label>Farenheit:</label>
                        <input type="number" style={{display:"block"}} onChange={this.getInput}></input>
                        <button style={{display:"block"}} onClick={this.updateParent}>Get Celcius</button>
                        <label>Celcius: </label>
                        <div>{this.props.parentstate.input}</div>
                    </div>
    }
}

export default TempCalcFtocsplit; 