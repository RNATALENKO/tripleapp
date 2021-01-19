import {Component} from 'react'; 


class ListItem extends Component{

    



    state = {
        input: this.props.inputprop 
    }


    render(){

        const listitemStyle = {
            width: "200px",
            height:"100px",
            border:"1px solid black"
        }


        return <li style={listitemStyle}>
                    <div>To Do</div>
                    <div style={{fontSize:"12px"}}>{this.props.inputprop}</div>
                </li>
    }
}

export default ListItem; 