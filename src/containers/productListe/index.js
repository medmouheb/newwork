import React, { Component } from 'react'
import CarousalProduct from './discount List/discountList'
import { connect } from 'react-redux'
import {Container,Row} from 'react-bootstrap';
import ProductListViewer from './productListViewer/productListViewer'

class ProductListe extends Component {
    render() {
        const {discountProduct} = this.props
        return(
            <Container>
                <Row>
                    <ProductListViewer/>
                    <CarousalProduct data={discountProduct} />
                </Row>
            </Container>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        discountProduct: state.discountProductReducer.discountProduct,
    }
}
export default connect(mapStateToProps)(ProductListe)