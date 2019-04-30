import React,{Component} from 'react'
import NewNAvbar from './newnav/newNav'
import NavBar from './navbar/navbar'
import SimpleProduct from './grid/SimpleProduct'
import QuestionFormat from './genericForm/genericform'
import Footer from './footer/footer'
import { connect } from 'react-redux'

class Common extends Component{
    render(){
        const { menu,products,footer} = this.props

        return(
            <div>
                <NewNAvbar/>
                <NavBar data={menu}/>
                <SimpleProduct data={products}/>
                <QuestionFormat/>
                {this.props.wrappedComponent}
                <Footer data={footer}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
        menu: state.menuReducers.menu,
        footer: state.FooterReducer.footer,
    }
  }
export default connect(mapStateToProps)(Common)
