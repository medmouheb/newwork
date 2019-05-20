import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar'

import {DropdownButton,Dropdown, Badge, Navbar, Form, Button, Nav, NavDropdown,OverlayTrigger } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import './navbar.css'

class NavBar extends Component {


  render() {


    const popover = (
      <Form style={{backgroundColor:"gray", zIndex:"6"}}>
        <Form.Group controlId="formBasicEmail">
          <br />
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
    const WhenConnected = (
      <Form inline style={{ display: !this.props.isConnected ? "" : "none" }}>
        <Button style={{margin:"20px"}} className="signUpButton" size="sm" variant="outline-primary">Sign up</Button>
        <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
          <Button size="sm" variant="outline-success">Log in</Button>
        </OverlayTrigger>
      </Form>
    )
    const WhenDisconnected = (
      <Form inline style={{ display: this.props.isConnected ? "" : "none" }}>
        <Link style={{ color: "red",fontSize:"40px",position:"relative" ,margin:"15px" }} to="ShoppingCart"><i class='fas fa-shopping-cart'></i>
        <Badge  style={{fontSize:"15px",position:"absolute",left:"0"  }} variant="danger">{this.props.totalitems}</Badge></Link>
        <Link ><i style={{color:"green",fontSize:"40px",margin:"12px" }} class='far fa-address-card'></i></Link>
      </Form>
    )
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  >
          <Nav >
            {this.props.data.map(el => {
              if (el.type === "link") {
                return (
                  <Nav.Link>
                    <Link style={{ textDecoration: "none" }} to={el.adresee}>   {el.name}</Link>
                  </Nav.Link>
                )
              }
              else if (el.type === "dropdown") {
                return (
                  <NavDropdown title={el.name} id="basic-nav-dropdown">
                    {el.childrens.map(element => {
                      return <NavDropdown.Item href={element.adresee}>{element.name}</NavDropdown.Item>
                    })}
                  </NavDropdown>
                )
              }
              else if (el.type === "secenddropdown") {
                return (
                  <DropdownButton drop="down"  variant="secondary" title={el.name}>
                    {el.childrens.map(element => {
                      if (element.type == "normal") { return <Dropdown.Item href={element.adresee} >{element.name}</Dropdown.Item> }
                      else {
                       
                        return (
                          <DropdownButton drop="right" variant="secondary" title={element.name}> 
                            {element.grandChildrens.map(element0 => { return (<Dropdown.Item href={element.adresee0} >{element0.name}</Dropdown.Item>) })}
                            </DropdownButton>
                        )
                      }
                    })}
                 </DropdownButton>
                )
              }
              else if (el.type === "logo") {
                return (
                  <Navbar.Brand  ><Link to="/"> <img alt={el.name} src={el.src} width="20" /></Link></Navbar.Brand>
                )
              }
              else if (el.type === "icon") {
                return (<div> <img src={el.src} width="20" /> <h6><Badge variant="secondary">{el.name}</Badge></h6></div>)
              }
            })}
          </Nav>
          <Searchbar />
          <div className="navbarButtons" >
            {WhenConnected}
            {WhenDisconnected}
          </div>

        </Navbar.Collapse>
      </Navbar>

    )

  }
}
const mapStateToProps = (state) => {
  return {
    isConnected: state.currentUserReducer.isConnected,
    totalitems: state.ShoppingCartReducer.totalitems,

  }
}

export default connect(mapStateToProps)(NavBar);