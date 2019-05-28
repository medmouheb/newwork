import React, { Component } from 'react'
import './SimpleProduct.css'
import GridCard from "./cards/gridCard"

class SimpleProduct extends Component {
    render() {
        return (
            <div className="SimpleProduct" >
                {this.props.data.map(el => {
                    return (
                        <GridCard data={el}/>
                    )
                })}
            </div>
        )
    }
}


export default SimpleProduct