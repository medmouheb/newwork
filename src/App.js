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
class App extends Component {

  render() {
    const { menu,products,footer,discountProduct ,sidemenu,ZoomIMG,BigSaleSRC,CarouselPhotos,ProductImagelist} = this.props
 
    return (
      <div className="App ">
        <Container>
        <NewNAvbar/>
        <NavBar data={menu}/>
        <Row>
          {window.screen.width >=1000?<Col sm><Filter/></Col>:""}
          <Col sm={8}>
          {window.screen.width <=1000?<Col sm><Filter/></Col>:""}
          <LoginComponenet/>
          <SignupComponenet/>
            <Sidebar data={sidemenu}/>
            <GoodZoom data={ProductImagelist}/>
            <SimpleProduct data={products}/>
            <Footer data={footer}/>
            <BigSale data={BigSaleSRC}/>
            <DiscountList data={discountProduct}/>
            <CarousalProduct data={discountProduct}/>
            <CarouselPhoto data={CarouselPhotos}/>
            <QuestionFormat/>
          </Col> 
          </Row>
        </Container>
        
 </div>
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
