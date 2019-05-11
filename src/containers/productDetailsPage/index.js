import React,{Component} from 'react'
import GoodZoom from './goodzoom/GoodZoom'
import Sidebar from './sidebar/sidebar'
import { connect } from 'react-redux'

class Productdetail extends Component{
    render(){
        const { sidemenu,ProductImagelist} = this.props

        return(
            <div  >
                <Sidebar data={sidemenu}/>
                <GoodZoom data={ProductImagelist}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      sidemenu:state.sidemenuReducer.sidemenu,
      ProductImagelist:state.ProductImagelistReducer.ProductImagelist
    }
  } 
  export default connect(mapStateToProps)(Productdetail);