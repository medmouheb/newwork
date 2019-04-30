import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/common/navbar/navbar'

import Footer from './containers/common/footer/footer'
import BigSale from './containers/homePage/bigsale/bigsale'
import DiscountList from './containers/homePage/discount List/discountList'
// import Filter from './containers/productsListPage/filter/filter'
import { connect } from 'react-redux'
import CarousalProduct from './containers/homePage/Carousel/CarausalProduct'
import Sidebar from './containers/productDetailsPage/sidebar/sidebar'
import {Container,Row,Col} from 'react-bootstrap';

import SimpleProduct from './containers/common/grid/SimpleProduct'
import GoodZoom from './containers/productDetailsPage/goodzoom/GoodZoom'
import LoginComponenet from './containers/tunnel/login'
import SignupComponenet from './containers/tunnel/signUP'
import QuestionFormat from './containers/common/genericForm/genericform'
import NewNAvbar from './containers/common/newnav/newNav'
import {Route, Switch, withRouter, Redirect, Link ,BrowserRouter} from "react-router-dom";

import Homepage from  './containers/homePage'
import Common from './containers/common'
import Tunnel from './containers/tunnel'
import Productdetail from './containers/productDetailsPage'
class App extends Component {

  render() {

return(
  <BrowserRouter>
  <div>
  <Link to="/tunnel"> <button>  tunnel</button></Link>
  <Link to="/Homepage">  <button> sidebar</button></Link>
  <Link to="/Productdetail"> <button>Productdetail</button>   </Link>
  <Route path="/" exact component={()=><Common wrappedComponent={<Tunnel/>}/>}/>
  <Route path="/tunnel" exact component={()=><Common wrappedComponent={<Tunnel/>}/>}/>
  <Route path="/Homepage" exact component={()=><Common wrappedComponent={<Homepage/>}/>}/>
  <Route path="/Productdetail" exact component={()=><Common wrappedComponent={<Productdetail/>}/>}/>
    
  </div>
  </BrowserRouter>
)
    
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
