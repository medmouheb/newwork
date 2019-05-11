import React,{Component} from 'react'
import QuestionFormat from './genericForm/genericform'
import {Container,Row,Col} from 'react-bootstrap';
import LoginComponenet from './login'
import SignupComponenet from './signUP'
class Tunnel extends Component{
    render(){
        return(
            <Container>
                <QuestionFormat/>
                <Row>
                    <Col>
                        <h3>login</h3>
                        <LoginComponenet/>
                    </Col>
                    <Col>
                        <h3>sign up</h3>
                        <SignupComponenet/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Tunnel