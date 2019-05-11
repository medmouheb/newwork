import React,{Component} from 'react'
import BigSale from './bigsale/bigsale'
import CarousalProduct from './Carousel/CarausalProduct'
import CarouselPhoto from './Carousel/carousalPhoto'

import { connect } from 'react-redux'
import {Container} from 'react-bootstrap';

class Homepage extends Component{
    render(){
        const {discountProduct,BigSaleSRC,CarouselPhotos} = this.props
        return(
            <Container>
                    <BigSale data={BigSaleSRC}/>
                    <CarousalProduct data={discountProduct}/>
                    <CarouselPhoto data={CarouselPhotos}/>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      discountProduct : state.discountProductReducer.discountProduct,
      BigSaleSRC:state.BigSaleSRCReducer.BigSaleSRC,
      CarouselPhotos: state.CarouselPhotoReducer.CarouselPhoto,
    }
  }
export default connect(mapStateToProps)(Homepage)