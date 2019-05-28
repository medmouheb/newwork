import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addItem } from '../../../../store/actions/shoppingCart'
import { addToWishList } from '../../../../store/actions/wishList'

import './listProduct.css'
class ListOfProducts extends Component {
    render() {
        return (
            <div >
                {this.props.data.map(el => {
                    return (
                        <Card>
                            <div className="cardBody" >
                                <div>
                                    <img src={el.src} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text>
                                        {el.description}<br />
                                        {el.price}dt
                                    </Card.Text>
                                    <Button onClick={() => { this.props.addItem(el) }} variant="primary">add to card</Button>
                                    <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }} onClick={(e) => { this.props.addToWishList(el); e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg" }} />
                                </Card.Body>
                            </div>


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
export default connect(null, mapDispatchToProps)(ListOfProducts)