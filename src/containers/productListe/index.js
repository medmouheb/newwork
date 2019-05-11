import React, { Component } from 'react'
import CarousalProduct from './discount List/discountList'
import { connect } from 'react-redux'
import SimpleProduct from './grid/SimpleProduct'
import {Container,Row,Col} from 'react-bootstrap';
import Filter from './filter/filter'


class ProductListe extends Component {
    render() {
        const { discountProduct, products } = this.props
        return(
            <Container>
            <Row>
                {window.screen.width >=1000?<Col sm><Filter/></Col>:""}
                <Col sm={8}>
                {window.screen.width <=1000?<Col sm><Filter/></Col>:""}
                <SimpleProduct data={products} />
                <CarousalProduct data={discountProduct} />
                </Col> 
            </Row>
        </Container>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        discountProduct: state.discountProductReducer.discountProduct,
        products: state.productReducer.products,
    }
}
export default connect(mapStateToProps)(ProductListe)