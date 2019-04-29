import React,{Component} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
const imgStyle={
    width:"100%",
    height : "100%",
    borderRadius: "25px"
}
class BigSale extends Component{
    render(){
        return(
            <Container>
                <Row>
                    {this.props.data.map(el=>{
                        return(
                            <Col xs={6}>
                                <a href={el.link}>
                                    <img  style={imgStyle} src={el.src}/>
                                </a>
                                
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}
export default BigSale