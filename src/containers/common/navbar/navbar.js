import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar'
import {FormControl,Navbar,Form,Button, Nav,NavDropdown ,Container,Row,Col,OverlayTrigger} from 'react-bootstrap';
import { connect } from 'react-redux'

class NavBar extends Component {
    constructor(props){
        super(props);
    }
  
  render() {
    const formStyle=
      {
        backgroundColor:"gray",
        borderRadius: "25px"

      }
    
    const popover = (
      <Form   style={formStyle}>  <Form.Group controlId="formBasicEmail">
      <br/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
      return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          {this.props.data.map(el=>{
            if(el.type==="link"){
                 return (
                                <Nav.Link href={el.adresee}>
                                    {el.name}
                                </Nav.Link>
                        )
            }
            else{
            return (
                    <NavDropdown title={el.name} id="basic-nav-dropdown">
                    {el.childrens.map(element=>{
                    return <NavDropdown.Item href={element.adresee}>{element.name}</NavDropdown.Item>
                    })}
                    </NavDropdown>
                    )
            }
        })}
          </Nav>
          <Searchbar/>
          <Form inline style={{display:this.props.isConnected?"":"none"}}>
            <Button style={{"margin" : "20px"}} variant="primary">my Cart </Button>
            <Button  style={{"margin" : "20px"}} variant="success">my Account</Button>
        </Form>
         <Form inline style={{display:!this.props.isConnected?"":"none"}}>
            <Button style={{"margin" : "20px"}} variant="outline-primary">Sign up</Button>
            <OverlayTrigger  trigger="focus" placement="right" overlay={popover}>
              <Button  style={{"margin" : "20px"}} variant="outline-success">Log in</Button>
            </OverlayTrigger>
            
        </Form> 
        </Navbar.Collapse>
      </Navbar>
      )
    
  }
}
const mapStateToProps = (state) => {
  return {
    isConnected: state.currentUserReducer.isConnected,
  }
}

export default connect(mapStateToProps,null)(NavBar);