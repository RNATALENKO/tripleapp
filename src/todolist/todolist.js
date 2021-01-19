import {Component} from 'react'; 
import ListItem from './todolistitem.js';



class ToDoList extends Component{

    state = {
        input: this.props.inputprop,
        list: [],
        broadlist: [],
        index:0,

    }


    //retrieve input and place into state
    retrieveInput = (event) => {
        this.setState({
            input:event.target.value
        })
    }

    //set parent default value to get passed back in
    updateParent = () => {
        this.props.updatepropf(this.state.input);
    }

  
    /* this is one way of attaching an item 
    //attach a list item
    attachItem = ()=>{
        const list = document.getElementById('mylist');
        const listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(this.state.input));
        list.appendChild(listItem);
    }
    */

    //method that attaches item to list based on state
    attachListItem = () => {
        const newArray = this.state.list; //get current list in state
        newArray.push(this.state.input);  //push to current list with input value
        this.setState({  
            list:newArray    //update state list with new list
        })
    }


    //method that attaches a broader more customizeable element instead of a list item
    attachBroadItem = () => {

        //get the broad list
        let currentIndex = this.state.index;
        currentIndex++ 
        const newArray = this.state.broadlist;
        const listItem = <ListItem key={currentIndex} inputprop={this.state.input}></ListItem>;
        newArray.push(listItem);
        this.setState({
            broadlist:newArray,
            index:currentIndex
        })

    }

    //styling
    listStyle = {
        listStyle: "none",
    }

    render(){

        return <span style={{display:"inline"}}>
                <input type="text" onChange={this.retrieveInput}></input>
                <button onClick={this.updateParent} onClick={this.attachBroadItem}>Add To List</button>
                <ul id="mylist" style={this.listStyle}>
                    {this.state.list.map((item,index)=><li key={index}>{item}</li>)}
                    {this.state.broadlist.map((item)=>item)}
                </ul>
             </span>
    }
}

export default ToDoList; 