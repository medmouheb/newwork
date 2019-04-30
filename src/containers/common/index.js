import React,{Component} from 'react'
import NewNAvbar from './newnav/newNav'
import NavBar from './navbar/navbar'
import QuestionFormat from './genericForm/genericform'
import Footer from './footer/footer'
import { connect } from 'react-redux'

class Common extends Component{
    render(){
        const {CategorieTab,menu,products,footer} = this.props

        return(
            <div>
                <NavBar data={menu}/>
                <NewNAvbar data={CategorieTab}/>
                <QuestionFormat/>
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
