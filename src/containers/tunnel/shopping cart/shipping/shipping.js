import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Button, Form } from 'react-bootstrap'
class Shipping extends Component {
    state = {
        showGlobal: true,
        showByProduct: false
    }
    render() {
        const showGlobal = () => {
            this.setState({
                showGlobal: true,
                showByProduct: false
            })
        }
        const showByProduct = () => {
            this.setState({
                showGlobal: false,
                showByProduct: true
            })
        }
        return (
            <div>
                <Button onClick={showGlobal} >Global Shipping <i class='fas fa-shipping-fast'></i></Button>
                <Button onClick={showByProduct} >Shipping by product <i class='fas fa-shipping-fast'></i></Button>
                <div id="Global_Shipping" style={{ display: this.state.showGlobal ? "" : "none" }}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>address</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
                <div id="Shipping_by_product" style={{ display: this.state.showByProduct ? "" : "none" }}>
                    {this.props.items.map((el, i) => {
                        return (
                            <div style={{ display: "flex"}}>
                                <div id="Shipping_by_product_Police">
                                    <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>address</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                                    </Form>
                                </div>
                                <Card>
                                    <div style={{ display: "flex", alignItems: "baseline" }}>
                                        <div>
                                            <img width="200" src={el.src} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{el.name}</Card.Title>
                                            <Card.Text style={{ display: "flex" }}>
                                                <div>
                                                    {el.description}
                                                </div>


                                            </Card.Text>
                                            <span>{this.props.itemsNumber[i]}</span>
                                        </Card.Body>
                                    </div>


                                </Card>
                            </div>

                        )
                    })}

                </div>
                <Button onClick={()=>{this.props.changeSate("Identification")}}>Identification</Button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.ShoppingCartReducer.items,
        itemsNumber: state.ShoppingCartReducer.itemsNumber,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shipping)