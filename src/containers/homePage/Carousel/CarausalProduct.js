import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Card } from 'react-bootstrap';
import './CarausalProduct.css'

class CarousalProduct extends Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: window.screen.width <= 1000 ? 2 : 3 } },
    galleryItems: this.galleryItems(),
  }
  galleryItems() {
    return (
      this.props.data.map((el, i) => {
        return (
          <Card onClick={() => { this.setState({ currentIndex: i }) }} style={{ minHeight: "100%" }}>
            <div className="discountpercent">{el.discount}</div>
            <Card.Img variant="top" src={el.src} />
            <Card.Body>
              {el.name}
              <Card.Text>
                {el.price}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{el.odldPrice}</small>
            </Card.Footer>
          </Card>
        )
      })
    )
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }

  slideNextPage = () => {
    const { itemsInSlide, galleryItems: { length } } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length

    this.setState({ currentIndex })
  }

  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }

  render() {
    const { currentIndex, galleryItems, responsive } = this.state

    return (
      <div className="CarousalProduct" >
        <div className="CarousalProductButton">
        <img src="https://image.flaticon.com/icons/svg/149/149124.svg" width={60} onClick={() => { this.setState({ currentIndex: this.state.currentIndex - 1 }) }}/>
        </div>
        <AliceCarousel
          mouseDragEnabled={true}
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
        <div className="CarousalProductButton">
        <img src="https://image.flaticon.com/icons/svg/149/149123.svg" width={60} onClick={() => { this.setState({ currentIndex: this.state.currentIndex + 1 }) }}/>
        </div>
      </div>
    )
  }
}

export default CarousalProduct