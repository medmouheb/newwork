import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import './SimpleProduct.css'
import { connect } from 'react-redux'
import { addItem } from '../../../../store/actions/shoppingCart'
import { addToWishList } from '../../../../store/actions/wishList'
const display = {
    margin: "20px",
    width: '13rem'
}
class SimpleProduct extends Component {
    render() {
        return (
            <div className="SimpleProduct" >
                {this.props.data.map(el => {
                    return (
                        <Card style={display}>
                            <Card.Img variant="top" src={el.src} />
                            <Card.Body>
                                <Card.Text>
                                    {el.description}<br />
                                    {el.price}dt
                                </Card.Text>
                                <Button onClick={() => { this.props.addItem(el) }} variant="primary">add to card</Button>
                                <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }} onClick={(e) => { this.props.addToWishList(el); e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg" }} />
                            </Card.Body>
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
export default connect(null, mapDispatchToProps)(SimpleProduct)