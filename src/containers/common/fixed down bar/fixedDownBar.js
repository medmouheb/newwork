import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card,Badge,Button } from "react-bootstrap"
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
                    <div>
                        <Button onClick={() => { this.setState({ show: !this.state.show }) }}>show product</Button>
                    </div>
                    <div style={{position:"relative"}}>
                        <img src="https://image.flaticon.com/icons/svg/172/172138.svg" style={{width:"80px"}}/>
                        <Badge className="ShoppingCarBadge" variant="danger">{products.length}</Badge>
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