import {Component} from 'react';





//this class will determine which component to return based on the users click

class TempCalcCtofsplit extends Component{


    state={
        input:this.props.parentstate.input,
    }


    convertToF = (number)=>{
        return (number*1.8) + 32
    }

    getInput = (event)=>{
        this.setState({
            input:event.target.value
        })
    }

    //this isn't actually updating or rendering anything to the screen, because the jsx isn't inside the render() function
    updateParent = ()=>{
        if(this.state.input!=null){
            let farenheit = this.convertToF(this.state.input);
            this.props.updateInput(farenheit);
        }
    }



    render(){

            return <div style={{padding:"10px"}}>
                        <br></br>
                        <label>Celcius:</label>
                        <input type="number" style={{display:"block"}} onChange={this.getInput}></input>
                        <button style={{display:"block"}} onClick={this.updateParent}>Get farenheit</button>
                        <label>Farenheit: </label>
                        <div>{this.props.parentstate.input}</div>
                    </div>
    }
}

export default TempCalcCtofsplit; 