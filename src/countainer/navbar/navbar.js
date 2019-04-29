import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar'
import {FormControl,Navbar,Form,Button, Nav,NavDropdown ,Container,Row,Col} from 'react-bootstrap';
import { connect } from 'react-redux'

class NavBar extends Component {
    constructor(props){
        super(props);
    }
  render() {
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
            <Button  style={{"margin" : "20px"}} variant="outline-success">Log in</Button>
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

export default connect(mapStateToProps)(NavBar);