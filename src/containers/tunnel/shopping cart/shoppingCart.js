import React, { Component } from 'react'
import { Modal, Button, Card, Badge } from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeItem, addSameItem, removeSameItem } from '../../../store/actions/shoppingCart'
import './shoppingCart.css'
class ShoppingCart extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            deleteindex: null
        };
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow(i) {
        this.setState({ deleteindex: i })
        this.setState({ show: true });
    }

    render() {
        const removeModale = (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => { this.props.removeItem(this.state.deleteindex); this.setState({ deleteindex: null }); this.handleClose() }}>
                        remove
                     </Button>
                </Modal.Body>

            </Modal>
        )
        return (
            <div>
                <div className="shoppingCarts">
                    {removeModale}
                    <div >
                        {this.props.items.map((el, i) => {
                            return (
                                <Card>
                                    <div className="shippingCard" >
                                        <div>
                                            <img width="200" src={el.src} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{el.name}</Card.Title>
                                            <Card.Text style={{ display: "flex" }}>
                                                <div>
                                                    {el.description}
                                                </div>
                                                <div>
                                                    <Button variant="danger" onClick={() => { this.handleShow(i) }} >remove</Button>
                                                </div>
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => { this.props.addSameItem(i) }}>+</Button>
                                            <span>{this.props.itemsNumber[i]}</span>
                                            <Button variant="primary" onClick={() => { this.props.itemsNumber[i] == 1 ? this.handleShow(i) : this.props.removeSameItem(i) }}>-</Button>
                                        </Card.Body>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                    <div className="shoppingIcons" >
                        <div class="cart">
                            <h1>Cart items<i class="	fa fa-shopping-cart"  ><Badge variant="light">{this.props.totalitems}</Badge></i><br /></h1>
                            <h1>Total price: <strong id="totalPrice"><i class="	fas fa-money-check-alt"  ><Badge variant="light">{this.props.total}</Badge></i></strong></h1>
                            <div >
                                <Button>Clear the cart</Button>
                                <Button onClick={() => { this.props.changeSate("Identification") }}> Identification</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.ShoppingCartReducer.items,
        total: state.ShoppingCartReducer.total,
        itemsNumber: state.ShoppingCartReducer.itemsNumber,
        totalitems: state.ShoppingCartReducer.totalitems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (index) => dispatch(removeItem(index)),
        addSameItem: (index) => dispatch(addSameItem(index)),
        removeSameItem: (index) => dispatch(removeSameItem(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)