import React, { Component } from 'react';
import './App.css';
import NavBar from './countainer/navbar/navbar'

import Footer from './countainer/footer/footer'
import BigSale from './countainer/bigsale/bigsale'
import DiscountList from './countainer/discount List/discountList'
import Filter from './countainer/filter/filter'
import { connect } from 'react-redux'
import CarousalProduct from './countainer/Carousel/CarausalProduct'
import Sidebar from './countainer/sidebar/sidebar'
import {Container,Row,Col} from 'react-bootstrap';

import SimpleProduct from './countainer/grid/SimpleProduct'
import GoodZoom from './countainer/goodzoom/GoodZoom'
import LoginComponenet from './countainer/login sign up/login'
import SignupComponenet from './countainer/login sign up/signUP'
import QuestionFormat from './countainer/genericForm/genericform'
import NewNAvbar from './countainer/newnav/newNav'
import {Route, Switch, withRouter, Redirect, Link ,BrowserRouter} from "react-router-dom";

class App extends Component {

  render() {
    const { menu,products,footer,discountProduct ,sidemenu,ZoomIMG,BigSaleSRC,CarouselPhotos,ProductImagelist} = this.props
    let routes = (
      <Switch>
          <Route
            path='/login'
            component={() => <LoginComponenet/>}
          />
          <Route
            path='/signup'
            component={() => <SignupComponenet/>}
          />
          <Route path="/" exact component={()=><div><NewNAvbar/><NavBar data={menu}/></div>}/>
          <Redirect to="/"/>
      </Switch>
  );
  if (this.props.isAuthenticated) {
    routes = (
        <Switch>
            <Route path="/" exact component={()=><div><NewNAvbar/><NavBar data={menu}/></div>}/>
            <Route
              path='/sidebar'
              component={() => <Sidebar data={sidemenu}/>}
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
            <Redirect to="/"/>
        </Switch>
    );
}
    return (
      <BrowserRouter>
      <div className="App ">
        <Container>
        
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
          {routes}

          </Col> 
          </Row>
        </Container>
        
 </div>
 </BrowserRouter>
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
