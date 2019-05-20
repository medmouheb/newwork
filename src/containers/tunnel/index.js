import React, { Component } from 'react'
import { Route, Link, BrowserRouter } from "react-router-dom";
import QuestionFormat from './genericForm/genericform'
import { ProgressBar } from 'react-bootstrap';
import LoginComponenet from './login'
import SignupComponenet from './signUP'
import ShoppingCart from './shopping cart/shoppingCart'
import Shipping from './shopping cart/shipping/shipping'
import Identification from './idetification/identification'
import Payment from './payment/payment'
import Conformation from './conformation/conformation'
import { connect } from 'react-redux'
import NavBar from '../common/navbar/navbar'
import Footer from '../common/footer/footer'
import CategoriesNav from '../common/cleanNav/categoriesNav'
class Tunnel extends Component {
    state={
        show:"ShoppingCart"
    }
    render() {
        const {CategorieTab,menu,footer} = this.props
        const changeSate=(newshow)=>{
            this.setState({show:newshow})
        }
        return (
            <div>
            <NavBar data={menu}/>
            <CategoriesNav data={CategorieTab}/>
            <BrowserRouter>
                
                    <Link to="/tunnel/QuestionFormat"> <button>  QuestionFormat</button></Link>
                    <Link to="/tunnel/LoginComponenet"> <button>  LoginComponenet</button></Link>
                    <Link to="/tunnel/SignupComponenet"> <button>  SignupComponenet</button></Link>
                    <ProgressBar>
                        <ProgressBar label="ShoppingCart" style={{border:"1px solid black"}} striped variant={this.state.show==="ShoppingCart"?"danger":"secondary"} now={20} key={1} />
                        <ProgressBar label="Identification" style={{border:"1px solid black"}} striped variant={this.state.show==="Identification"?"danger":"secondary"} now={20} key={3} />
                        <ProgressBar label="Shipping" style={{border:"1px solid black"}} striped variant={this.state.show==="Shipping"?"danger":"secondary"} now={20} key={2} />
                        <ProgressBar label="Payment" style={{border:"1px solid black"}} striped variant={this.state.show==="Payment"?"danger":"secondary"} now={20} key={4} />
                        <ProgressBar label="Conformation" style={{border:"1px solid black"}} striped variant={this.state.show==="Conformation"?"danger":"secondary"} now={20} key={5} />

                    </ProgressBar>

                    <Route path="/tunnel/QuestionFormat"  component={QuestionFormat}  />
                    <Route path="/tunnel/LoginComponenet"  component={LoginComponenet}  />
                    <Route path="/tunnel/SignupComponenet"  component={SignupComponenet}  />
                    <div style={{display:this.state.show==="ShoppingCart"?"":"none"}}>
                    <ShoppingCart  changeSate={changeSate} />
                    </div>
                    <div style={{display:this.state.show==="Identification"?"":"none"}}>
                    <Identification  changeSate={changeSate}/>
                    </div>
                    <div style={{display:this.state.show==="Shipping"?"":"none"}}>
                    <Shipping changeSate={changeSate}  />
                    </div>
                    <div style={{display:this.state.show==="Payment"?"":"none"}}>
                    <Payment  changeSate={changeSate}/>
                    </div>
                    <div style={{display:this.state.show==="Conformation"?"":"none"}}>
                    <Conformation  /> 
                    </div>                    
                    
            </BrowserRouter>
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
export default connect(mapStateToProps)(Tunnel)