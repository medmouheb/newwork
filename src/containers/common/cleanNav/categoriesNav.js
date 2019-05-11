import React, { Component } from 'react'
import './categoriesNav.css'
class CategoriesNav extends Component {
    state={
        show:null
    }
    render() {
        const handleShow=(i)=>{
            this.setState({show:i})
        }
        const handleHide=()=>{
            this.setState({show:null})
        }
        return (
            <div className="CategoriesNav">
                {this.props.data.map((element,i) => {
                    return (
                        <div onMouseOver={()=>{handleShow(i)}} onMouseOut={handleHide}>
                            <button className="dropbtn" onClick={()=>{handleShow(i)}} >
                            {element.name}
                            </button>
                            <div className="CategoriesLists" style={{display:this.state.show===i?"":"none"}}>
                                    {element.category.map((el, index) => {

                                        return (
                                            <div className="CategoriesColumn" >
                                                <h3>{el.name}</h3>
                                                {el.list.map(elem => {
                                                    return (<a href="#">{elem}</a>)
                                                })}
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default CategoriesNav