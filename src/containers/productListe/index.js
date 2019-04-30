import React,{Component} from 'react'
import CarousalProduct from './discount List/discountList'
import { connect } from 'react-redux'

class ProductListe extends Component{
    render(){
        const {discountProduct} = this.props
        return(
                    <CarousalProduct data={discountProduct}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      discountProduct : state.discountProductReducer.discountProduct
    }
  }
export default connect(mapStateToProps)(ProductListe)