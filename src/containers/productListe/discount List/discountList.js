import React,{Component} from 'react'
import './discountLIst.css';
import {Card} from 'react-bootstrap';

class DiscountList extends Component{
    render(){
        return(
            <div className="scrollmenu">

                {this.props.data.map(el=>{
                        return(
                    <Card style={{minWidth:"200px"}}>
                        <div className="discountpercent">{el.discount}</div>
                        <Card.Img  variant="top" src={el.src} />
                        <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>
                            {el.price}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{el.odldPrice}</small>
                        </Card.Footer>
                    </Card>
                        )
                    })}
                    {this.props.data.map(el=>{
                        return(
                    <Card style={{minWidth:"200px"}}>
                        <div className="discountpercent">{el.discount}</div>
                        <Card.Img  variant="top" src={el.src} />
                        <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>
                            {el.price}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{el.odldPrice}</small>
                        </Card.Footer>
                    </Card>
                        )
                    })}
                    
                
            </div>
        )
    }
}
export default DiscountList