import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar/navbar'

import Footer from './Components/footer/footer'
import BigSale from './countainer/bigsale'
import DiscountList from './countainer/discountList'
import Filter from './Components/filter/filter'
import { connect } from 'react-redux'

import CarouselPhoto from './Components/Carousel/carousalPhoto'
import CarousalProduct from './Components/Carousel/CarausalProduct'
import Sidebar from './Components/navbar/sidebar'
import {Container,Row,Col} from 'react-bootstrap';

import SimpleProduct from './Components/grid/SimpleProduct'
import GoodZoom from './Components/goodzoom/GoodZoom'
import LoginComponenet from './Components/login sign up/login'
import SignupComponenet from './Components/login sign up/signUP'
import QuestionFormat from './Components/genericForm/genericform'
import NewNAvbar from './Components/newnav/newNav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    const { menu,products,footer,discountProduct ,sidemenu,ZoomIMG,BigSaleSRC,CarouselPhotos,ProductImagelist} = this.props
 
    return (
      <Router>
      <div className="App ">
        <Container>
        <NewNAvbar/>
        <NavBar data={menu}/>
        <Link to="/login">   login</Link>
        <Link to="/sidebar">   sidebar</Link>
        <Link to="/signup">    signup</Link>
        <Link to="/goodzoom">     goodzoom</Link>
        <Link to="/Simpleproduct">     Simpleproduct</Link>
        <Link to="/footer">    footer</Link>
        <Link to="/bigsale">    bigsale</Link>
        <Link to="/discount">    discount</Link>
        <Link to="/carsoulProduct">    carsoulProduct</Link>
        <Link to="/questionform">    questionform</Link>

        <Row>
          {window.screen.width >=1000?<Col sm><Filter/></Col>:""}
          <Col sm={8}>
          {window.screen.width <=1000?<Col sm><Filter/></Col>:""}
          <Route
  path='/login'
  component={() => <LoginComponenet/>}
/>
<Route
  path='/sidebar'
  component={() => <Sidebar data={sidemenu}/>}
/>
<Route
  path='/signup'
  component={() => <SignupComponenet/>}
/>
<Route
  path='/goodzoom'
  component={() => <GoodZoom data={ProductImagelist}/>}
/>
<Route
  path='/Simpleproduct'
  component={() => <SimpleProduct data={products}/>}
/>
<Route
  path='/footer'
  component={() => <Footer data={footer}/>}
/>
<Route
  path='/bigsale'
  component={() => <BigSale data={BigSaleSRC}/>}
/>
<Route
  path='/discount'
  component={() => <DiscountList data={discountProduct}/>}
/>
<Route
  path='/carsoulProduct'
  component={() => <CarousalProduct data={discountProduct}/>}
/>
<Route
  path='/questionform'
  component={() => <QuestionFormat/>}
/>
          </Col> 
          </Row>
        </Container>
        
 </div>
 </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    menu: state.menuReducers.menu,
    images: state.carouselReducer.images,
    footer: state.FooterReducer.footer,
    discountProduct : state.discountProductReducer.discountProduct,
    sidemenu:state.sidemenuReducer.sidemenu,
    BigSaleSRC:state.BigSaleSRCReducer.BigSaleSRC,
    CarouselPhotos: state.CarouselPhotoReducer.CarouselPhoto,
    ProductImagelist:state.ProductImagelistReducer.ProductImagelist
  }
}


export default connect(mapStateToProps)(App);
