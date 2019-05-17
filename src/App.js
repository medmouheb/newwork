import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

import {Route,BrowserRouter,Switch} from "react-router-dom";
import {Container} from 'react-bootstrap';

import Homepage from  './containers/homePage'
import Common from './containers/common'
import Tunnel from './containers/tunnel'
import Productdetail from './containers/productDetailsPage'
import ProductListe from './containers/productListe'
import ProductListViewer from './containers/productListViewer/productListViewer'
import DataTable from './containers/dataTable'

class App extends Component {

  render() {

return(
  <BrowserRouter>
    <Container>
  <Switch>
      
      <Route path="/Homepage" exact component={()=><Common wrappedComponent={<Homepage/>}/>}/>
      <Route path="/DataTable" exact component={()=><Common wrappedComponent={<DataTable/>}/>}/>
      <Route path="/ProductListViewer" exact component={()=><Common wrappedComponent={<ProductListViewer/>}/>}/>
      <Route path="/productListe" exact component={()=><Common wrappedComponent={<ProductListe/>}/>}/>
      <Route path="/Productdetail" exact component={()=><Common wrappedComponent={<Productdetail/>}/>}/>
      <Route path="/tunnel" exact component={()=><Common wrappedComponent={<Tunnel/>}/>}/>
      <Route path="/"   component={()=><Common wrappedComponent={<Homepage/>}/>}/>
      </Switch>

    </Container>
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
