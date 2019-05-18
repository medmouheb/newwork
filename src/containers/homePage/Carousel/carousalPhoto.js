import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselPhoto extends Component{
    render(){
        return(
            <Carousel  centerMode showThumbs={false}>
                
            {this.props.data.map(el=>{
              return <div width="700px">
              <img  src={el.src} />
              <p className="legend">{el.paragraph}</p>
            </div>
            })}
    
  </Carousel>
        )
    }
}

export default CarouselPhoto