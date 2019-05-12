import React, { Component } from 'react'
import CarousalProduct from './discount List/discountList'
import { connect } from 'react-redux'
import SimpleProduct from './grid/SimpleProduct'
import {Container,Row,Col} from 'react-bootstrap';
import Filter from './filter/filter'
import ProductListViewer from '../productListViewer/productListViewer'

class ProductListe extends Component {
    render() {
        const { discountProduct, products } = this.props
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
        products: state.productReducer.products,
    }
}
export default connect(mapStateToProps)(ProductListe)