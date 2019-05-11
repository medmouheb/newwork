import React,{Component} from 'react'
import NewNAvbar from './newnav/newNav'
import NavBar from './navbar/navbar'
import Footer from './footer/footer'
import GreenNav from './green nav/greenNav'
import { connect } from 'react-redux'
import CategoriesNav from './cleanNav/categoriesNav'
class Common extends Component{
    render(){
        const {CategorieTab,menu,products,footer} = this.props

        return(
            <div className="Common">
                <NavBar data={menu}/>

                <CategoriesNav data={CategorieTab}/>
                {this.props.wrappedComponent}
                <Footer data={footer}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menu: state.menuReducers.menu,
        footer: state.FooterReducer.footer,
        CategorieTab:state.MegaMenuReducers.CategorieTab
    }
  }
export default connect(mapStateToProps)(Common)
