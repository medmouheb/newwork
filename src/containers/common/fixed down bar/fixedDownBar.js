import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Badge } from "react-bootstrap"
import ShoppingCart from "../../tunnel/shopping cart/shoppingCart"
import './fixedDownBar.css'
class FixedDownBar extends Component {
    state = {
        show: ""
    }
    render() {
        const { products } = this.props
        return (
            <div className="FixedDownBar">
                <div className="FixedDownBarProductswishListe" style={{ display: this.state.show==="wishListe" ? "" : "none" }}>
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
                <div className="FixedDownBarProductspanier" style={{ display: this.state.show==="panier" ? "" : "none" }}>
                    <ShoppingCart/>
                </div>
                <div className="FixedDownBarButtons" >
                    <div style={{ position: "relative" }} onClick={() => { this.setState({ show:this.state.show===  "Derniers"?"":"Derniers"}) }}>
                        <h3>
                            Derniers produits vus 
                            <Badge variant="danger">{0}</Badge>
                        </h3>
                    </div>
                    <div style={{ position: "relative" }} onClick={() => { this.setState({ show:this.state.show===  "wishListe"?"":"wishListe"}) }}>
                        <h3>
                            Ma liste d'envies
                            <Badge variant="danger">{products.length}</Badge>
                        </h3>
                    </div>
                    <div style={{ position: "relative" }} onClick={() => { this.setState({ show:this.state.show=== "comparateur"?"":"comparateur"}) }}>
                        <h3>
                            comparateur
                            <Badge variant="danger">{0}</Badge>
                        </h3>
                    </div>
                    <div style={{ position: "relative" }} onClick={() => { this.setState({ show:this.state.show=== "panier"?"":"panier"}) }}>
                        <h3>
                            panier
                            <Badge variant="danger">{0}</Badge>
                        </h3>
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