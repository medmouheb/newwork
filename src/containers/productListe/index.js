import React, { Component } from 'react'
import CarousalProduct from './discount List/discountList'
import { connect } from 'react-redux'
import SimpleProduct from '../productListe/grid/SimpleProduct'


class ProductListe extends Component {
    render() {
        const { discountProduct, products } = this.props
        return (
        <div>
            <SimpleProduct data={products} />
            <CarousalProduct data={discountProduct} />
        </div>
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