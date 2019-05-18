import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar'
import Homepage from '../../../containers/homePage'
import Tunnel from '../../../containers/tunnel'
import Productdetail from '../../../containers/productDetailsPage'
import ProductListe from '../../../containers/productListe'
import ProductListViewer from '../../../containers/productListViewer/productListViewer'
import DataTable from '../../../containers/dataTable'
import ShoppingCart from '../../../containers/tunnel/shopping cart/shoppingCart'
import Shipping from '../../../containers/tunnel/shopping cart/shipping/shipping'
import Common from '../../../containers/common'

import {DropdownButton,Dropdown, Badge, FormControl, Navbar, Form, Button, Nav, NavDropdown, Container, Row, Col, OverlayTrigger } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Link, Route, BrowserRouter } from "react-router-dom";
import './navbar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    const popover = (
      <Form style={{ zIndex: "6", backgroundColor: "gray", borderRadius: "25px" }} >
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
        <Button style={{ marginLeft: "60px" }} variant="outline-primary">Sign up</Button>
        <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
          <Button variant="outline-success">Log in</Button>
        </OverlayTrigger>
      </Form>
    )
    const WhenDisconnected = (
      <Form inline style={{ display: this.props.isConnected ? "" : "none" }}>
        <Button variant="primary" size="lg"><Link style={{ color: "white" }} to="ShoppingCart"><i class='fab fa-opencart'></i>
        </Link></Button>
        <Button variant="success" size="lg"><i class='far fa-address-card'></i>
        </Button>
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
  }
}

export default connect(mapStateToProps, null)(NavBar);