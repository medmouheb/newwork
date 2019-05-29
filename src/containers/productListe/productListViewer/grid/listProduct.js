import React, { Component } from 'react'
import ListCard from './cards/listCard'
import './listProduct.css'
class ListOfProducts extends Component {
    render() {
        return (
            <div >
                {this.props.data.map(el => {
                    return (
                        <ListCard cardType="simpleList" data={el} />
                    )
                })}
            </div>
        )
    }
}



export default ListOfProducts