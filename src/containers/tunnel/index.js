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
class Tunnel extends Component {
    state={
        show:"ShoppingCart"
    }
    render() {
        const changeSate=(newshow)=>{
            this.setState({show:newshow})
        }
        return (
            <BrowserRouter>

                    <Link to="/tunnel/QuestionFormat"> <button>  QuestionFormat</button></Link>
                    <Link to="/tunnel/LoginComponenet"> <button>  LoginComponenet</button></Link>
                    <Link to="/tunnel/SignupComponenet"> <button>  SignupComponenet</button></Link>
                    <ProgressBar>
                        <ProgressBar label="ShoppingCart" style={{border:"1px solid black"}} striped variant={this.state.show==="ShoppingCart"?"success":"secondary"} now={20} key={1} />
                        <ProgressBar label="Shipping" style={{border:"1px solid black"}} striped variant={this.state.show==="Shipping"?"success":"secondary"} now={20} key={2} />
                        <ProgressBar label="Identification" style={{border:"1px solid black"}} striped variant={this.state.show==="Identification"?"success":"secondary"} now={20} key={3} />
                        <ProgressBar label="Payment" style={{border:"1px solid black"}} striped variant={this.state.show==="Payment"?"success":"secondary"} now={20} key={4} />
                        <ProgressBar label="Conformation" style={{border:"1px solid black"}} striped variant={this.state.show==="Conformation"?"success":"secondary"} now={20} key={5} />

                    </ProgressBar>

                    <Route path="/tunnel/QuestionFormat"  component={QuestionFormat}  />
                    <Route path="/tunnel/LoginComponenet"  component={LoginComponenet}  />
                    <Route path="/tunnel/SignupComponenet"  component={SignupComponenet}  />
                    <div style={{display:this.state.show==="ShoppingCart"?"":"none"}}>
                    <ShoppingCart  changeSate={changeSate} />
                    </div>
                    <div style={{display:this.state.show==="Shipping"?"":"none"}}>
                    <Shipping changeSate={changeSate}  />
                    </div>
                    <div style={{display:this.state.show==="Identification"?"":"none"}}>
                    <Identification  changeSate={changeSate}/>
                    </div>
                    <div style={{display:this.state.show==="Payment"?"":"none"}}>
                    <Payment  changeSate={changeSate}/>
                    </div>
                    <div style={{display:this.state.show==="Conformation"?"":"none"}}>
                    <Conformation  /> 
                    </div>                    
                    
            </BrowserRouter>
        )
    }
}
export default Tunnel