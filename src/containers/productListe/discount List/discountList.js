import React, { Component } from 'react'
import './discountLIst.css';
import { Card,Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { addItem } from '../../../store/actions/shoppingCart'
import { addToWishList } from '../../../store/actions/wishList'
class DiscountList extends Component {
    render() {
        return (
            <div className="scrollmenu">

                {this.props.data.map(el => {
                    return (
                        <Card style={{ minWidth: "200px" }}>
                            <div className="discountpercent">{el.discount}</div>
                            <Card.Img variant="top" src={el.src} />
                            <Card.Body>
                                <Card.Title>{el.name}</Card.Title>
                                <Card.Text>
                                    {el.price}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{el.odldPrice}</small>
                                < Button onClick={() => { this.props.addItem(el) }} variant="primary">add to card</Button>
                                <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }} onClick={(e) => { this.props.addToWishList(el); e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg" }} />

                            </Card.Footer>
                        </Card>
                    )
                })}
                {this.props.data.map(el => {
                    return (
                        <Card style={{ minWidth: "200px" }}>
                            <div className="discountpercent">{el.discount}</div>
                            <Card.Img variant="top" src={el.src} />
                            <Card.Body>
                                <Card.Title>{el.name}</Card.Title>
                                <Card.Text>
                                    {el.price}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{el.odldPrice}</small>
                                < Button onClick={() => { this.props.addItem(el) }} variant="primary">add to card</Button>
                                <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }} onClick={(e) => { this.props.addToWishList(el); e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg" }} />

                            </Card.Footer>
                        </Card>
                    )
                })}


            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (data) => dispatch(addItem(data)),
        addToWishList: (data) => dispatch(addToWishList(data)),
    }
}
export default connect(null, mapDispatchToProps)(DiscountList)