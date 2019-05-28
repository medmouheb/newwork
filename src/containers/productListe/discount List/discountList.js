import React, { Component } from 'react'
import './discountLIst.css';
import GridCard from "../productListViewer/grid/cards/gridCard"
class DiscountList extends Component {
    render() {
        return (
            <div className="scrollmenu">

                {this.props.data.map(el => {
                    return (
                        <GridCard cardType="carosal" data={el}/>
                    )
                })}
                {this.props.data.map(el => {
                    return (
                        <GridCard cardType="carosal" data={el}/>
                    )
                })}


            </div>
        )
    }
}

export default DiscountList