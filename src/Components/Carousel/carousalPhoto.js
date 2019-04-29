import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselPhoto extends Component{
    render(){
        return(
            <Carousel autoPlay>
            {this.props.data.map(el=>{
              return <div>
              <img src={el.src} />
              <p className="legend">{el.paragraph}</p>
            </div>
            })}
    
  </Carousel>
        )
    }
}

export default CarouselPhoto