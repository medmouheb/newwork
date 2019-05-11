import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
class ListOfProducts extends Component {
    render() {
        return (
            <div >
                {this.props.data.map(el => {
                    return (
                        <Card>
                            <div style={{ display: "flex", alignItems: "baseline" }}>
                                <div>
                                    <img width="200" src={el.src} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text>
                                        {el.description}
                                    </Card.Text>
                                    <Button variant="primary">add to card</Button>
                                </Card.Body>
                            </div>


                        </Card>
                    )
                })}


            </div>
        )
    }
}
export default ListOfProducts