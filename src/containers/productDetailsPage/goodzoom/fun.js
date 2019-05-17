import React, { Component } from 'react'
import "./GoodZoom.css"
class GoodZoom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const imageZoom=()=> {
            var img, lens, result, cx, cy;
            img = this.refs.myimage;
            result = this.refs.myresult;
            lens=this.refs.lens
            cx = result.offsetWidth / lens.offsetWidth;
            cy = result.offsetHeight / lens.offsetHeight;
            result.style.backgroundImage = "url('" + img.src + "')";
            result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
            lens.addEventListener("mousemove", moveLens);
            img.addEventListener("mousemove", moveLens);
            lens.addEventListener("touchmove", moveLens);
            img.addEventListener("touchmove", moveLens);
            function moveLens(e) {
              var pos, x, y;
              e.preventDefault();
              pos = getCursorPos(e);
              x = pos.x - (lens.offsetWidth / 2);
              y = pos.y - (lens.offsetHeight / 2);
              if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
              if (x < 0) {x = 0;}
              if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
              if (y < 0) {y = 0;}
              lens.style.left = x + "px";
              lens.style.top = y + "px";
              result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
            }
            function getCursorPos(e) {
              var a, x = 0, y = 0;
              e = e || window.event;
              a = img.getBoundingClientRect();
              x = e.pageX - a.left;
              y = e.pageY - a.top;
              x = x - window.pageXOffset;
              y = y - window.pageYOffset;
              return {x : x, y : y};
            }
          }
          
        return (
            <div>
                <h1>Image Zoom</h1>
                <p>Mouse over the image:</p>
                <div className="img-zoom-container" >
                <div className="img-zoom-lens" ref="lens"/>
                    <img onMouseOver={imageZoom} width={300} height={240} id="myimage" ref="myimage" src="https://myegy.to/files/img/content/8/569/1556728804.200_300.jpg" />
                    <div className="img-zoom-result" id="myresult" ref="myresult" />
                </div>
                <p>The image must be placed inside a container with relative positioning.</p>
                <p>The result can be put anywhere on the page, but must have the class name "img-zoom-result".</p>
                <p>Make sure both the image and the result have IDs. These IDs are used when a javaScript initiates the zoom effect.</p>
            </div>
        )
    }
}
export default GoodZoom
