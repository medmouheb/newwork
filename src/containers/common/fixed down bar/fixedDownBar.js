import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card,Badge } from "react-bootstrap"
import './fixedDownBar.css'
class FixedDownBar extends Component {
    state = {
        show: false
    }
    render() {
        const { products } = this.props
        return (
            <div className="FixedDownBar">
                <div className="FixedDownBarProducts" style={{ display: this.state.show ? "" : "none" }}>
                    {products.map((el) => {
                        return (
                            <Card>
                                <div className="shippingCard" >
                                    <div>
                                        <img width="50" src={el.src} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{el.name}</Card.Title>
                                        <Card.Text style={{ display: "flex" }}>
                                            {el.description}
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div className="FixedDownBarButtons" >
                    <div onClick={() => { this.setState({ show: !this.state.show }) }}>
                        <h2>show product<img style={{width:"20px"}} src="https://image.flaticon.com/icons/svg/25/25756.svg"/></h2>
                    </div>
                    <div style={{position:"relative"}}>
                        <h2>
                            Ma liste d'envies
                            <Badge  variant="danger">{products.length}</Badge>
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.WishListReducer.products,

    }
}

export default connect(mapStateToProps)(FixedDownBar)