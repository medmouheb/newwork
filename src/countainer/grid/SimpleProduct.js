import React ,{Component} from 'react'
import {Card} from 'react-bootstrap';
const display={
    margin: "20px",
    width: '13rem'
}
class SimpleProduct extends Component{
    render(){
        return(
            <div style={{display:"flex",flexWrap: "wrap"}}>
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