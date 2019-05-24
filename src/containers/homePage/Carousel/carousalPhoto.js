import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carosalPhoto.css'
class CarouselPhoto extends Component {
    render() {
        return (
            <div className="CarouselCountainer"  >
            <Carousel width={800} centerMode showThumbs={false}>

                {this.props.data.map(el => {
                    return <div className="CarouselSlides" >
                        <img src={el.src} />
                        <p className="legend">{el.paragraph}</p>
                    </div>
                })}

            </Carousel>
            </div>
        )
    }
}

export default CarouselPhoto