import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

class Payment extends Component{
    render(){
        return(
            <div>
                moneeeeeeeeeeeeeeeeeeeey
                <Button onClick={()=>{this.props.changeSate("Conformation")}}>Conformation</Button>
            </div>
        )
    }
}
export default Payment