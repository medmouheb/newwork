import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addItem } from '../../../../../store/actions/shoppingCart'
import { addToWishList } from '../../../../../store/actions/wishList'
const display = {
    margin: "20px",
    width: '13rem'
}
class GridCard extends Component {
    render() {
        if(this.props.cardType==="carosal"){
            return(
                <Card style={{ minHeight: "100%",minWidth:"200px" }}>
            <div className="discountpercent">{this.props.data.discount||""}</div>
            <Card.Img variant="top" src={this.props.data.src} />
            <Card.Body>
              {this.props.data.name}
              <Card.Text>
                {this.props.data.price} DT
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{this.props.data.odldPrice}  DT</small>
             < Button onClick={()=>{this.props.addItem(this.props.data)}} variant="primary">add to card</Button>
              <img src="https://image.flaticon.com/icons/svg/60/60993.svg"  style={{width:"20px"}} onClick={(e)=>{this.props.addToWishList(this.props.data) ;e.target.src="https://image.flaticon.com/icons/svg/148/148836.svg"}}/>
            </Card.Footer>
          </Card>
            )
            
        }
        else {
            return (
                <Card style={display}>
                    <Card.Img variant="top" src={this.props.data.src} />
                    <Card.Body>
                        <Card.Text>
                            {this.props.data.description}<br />
                            {this.props.data.price}dt
                                    </Card.Text>
                        <Button onClick={() => { this.props.addItem(this.props.data) }} variant="primary">add to card</Button>
                        <img src="https://image.flaticon.com/icons/svg/60/60993.svg" style={{ width: "20px" }} onClick={(e) => { this.props.addToWishList(this.props.data); e.target.src = "https://image.flaticon.com/icons/svg/148/148836.svg" }} />
                    </Card.Body>
                </Card>
            )
        }
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (data) => dispatch(addItem(data)),
        addToWishList: (data) => dispatch(addToWishList(data)),
    }
}
export default connect(null, mapDispatchToProps)(GridCard)