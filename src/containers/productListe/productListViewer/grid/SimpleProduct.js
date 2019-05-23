import React ,{Component} from 'react'
import {Card} from 'react-bootstrap'
import './SimpleProduct.css'
const display={
    margin: "20px",
    width: '13rem'
}
class SimpleProduct extends Component{
    render(){
        return(
            <div className="SimpleProduct" >
                {this.props.data.map(el=>{
                    return(
                        <Card style={display}>
                            <Card.Img variant="top" src={el.src} />
                            <Card.Body>
                                <Card.Text>
                                {el.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
export default SimpleProduct