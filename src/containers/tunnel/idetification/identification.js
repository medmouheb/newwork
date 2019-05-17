import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
class Identification extends Component{
    render(){
        return(
            <div>
                are you you
                <Button onClick={()=>{this.props.changeSate("Payment")}}>Payment</Button>
            </div>
        )
    }
}
export default Identification