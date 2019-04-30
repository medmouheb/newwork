import React,{Component} from 'react'
import BigSale from './bigsale/bigsale'
import CarousalProduct from './Carousel/CarausalProduct'
import CarouselPhoto from './Carousel/carousalPhoto'
import Filter from './filter/filter'
import DiscountList from './discount List/discountList'
import { connect } from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap';

class Homepage extends Component{
    render(){
        const {discountProduct,BigSaleSRC,CarouselPhotos} = this.props
        return(
            <Container>
                <Row>
                    {window.screen.width >=1000?<Col sm><Filter/></Col>:""}
                    <Col sm={8}>
                    {window.screen.width <=1000?<Col sm><Filter/></Col>:""}
                    <BigSale data={BigSaleSRC}/>
                    <CarousalProduct data={discountProduct}/>
                    <CarouselPhoto data={CarouselPhotos}/>
                    <DiscountList data={discountProduct}/>
                    </Col> 
                </Row>
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