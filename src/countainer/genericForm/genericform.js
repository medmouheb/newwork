import React,{Component} from 'react';

import {Form,Col,Row,Container} from 'react-bootstrap';

const data=[
    {
        type:"text",
        comment:"email",
        text:"give us your email little nigga"
    },
    {
        type:"text",
        comment:"password"
    },
    {
        type:"text",
        comment:"normal",
        label:"hate isemik"
    },
]

class QuestionFormat extends Component{

    render(){

        return(
            <Container>
              <Row>
              <Col xs={2}></Col>
              <Col>
                <Form>
                    {data.map(element=>{
                        if(element.type==="text" && element.comment==="email"){
                            return(
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    {element.text}
                                    </Form.Text>
                                </Form.Group>
                            )
                        }
                        else if(element.type==="text" && element.comment==="password"){
                            return(
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            )
                        }
                        else if(element.type==="text" && element.comment==="normal"){
                            return(
                                <Form.Group  controlId="formGridCity">
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            )
                        }
                        else if(element.type==="text" && element.comment==="textEria"){
                        return(
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{element.label}</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        )  
                        }
                        else if(element.type==="uni" && element.comment==="select"){
                            return(
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control as="select">
                                    {element.options.map(el=>{return <option>{el}</option>})}
                                    </Form.Control>
                                </Form.Group>
                            )
                        }
                        else if(element.type==="uni" && element.comment==="checkbox"){
                            return(
                                <Form.Group>
                                    <Form.Label column sm="2">
                                    {element.label}
                                    </Form.Label>
                                    <div key="default-checkbox" className="mb-3">
                                    {element.options.map(el=>{return(
                                        <Form.Check 
                                        type="checkbox"
                                        label={el}
                                    />
                                    )})}
                                    </div>
                                    
                                </Form.Group>
                            )
                        }
                        else if(element.type==="text" && element.comment==="number"){
                            return(
                                <Form.Group  controlId="formGridCity">
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control type="number"   />
                                </Form.Group>
                            )
                        }
                        else if(element.type==="text" && element.comment==="date"){
                            return(
                                <Form.Group  controlId="formGridCity">
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            )
                        }
                        else if(element.type==="text" && element.comment==="file"){
                            return(
                                <Form.Group  controlId="formGridCity">
                                    <Form.Label>{element.label}</Form.Label>
                                    <Form.Control  type="file" />
                                </Form.Group>
                            )
                        }
                    })}
                </Form>
                </Col>
                <Col xs={2}></Col>
                </Row>
            </Container>
            
        )
        
    }
}
export default QuestionFormat