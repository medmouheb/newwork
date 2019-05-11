import React,{Component} from 'react'
import imageZoom from './fun'
import './GoodZoom.css';
import {Card} from 'react-bootstrap';

class GoodZoom extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            currentIndex:0 ,
            hide:true
        };
      }

    componentDidMount(){
        imageZoom("myimage", "myresult")
    }
    
    render(){
        const handleClick=(i)=>{
            this.setState({currentIndex:i});
            setTimeout(function(){ imageZoom("myimage", "myresult"); }, 300)
            
        }
        const handlehide=()=>{
            this.setState({hide:true})
            imageZoom("myimage", "myresult")
        }
        const handleShow=()=>{
            this.setState({hide:false})
        }
        return(
            <div className="img-zoom-container">
            <div style={{display:"flex"}}>
            <div >
                <div style={{margin : "20px"}} onMouseOver={handleShow} onMouseOut={handlehide}>
                <img   id="myimage" src={this.props.data[this.state.currentIndex]} width="300" height="240"/>
                <img  id="normalImg" src={this.props.data[this.state.currentIndex]} width="300" height="240"/>
                </div>
                
                <div className="zommGalary">
                    {this.props.data.map((el,i)=>{
                        return(
                            <img onClick={()=>{handleClick(i)}}  src={el} width="80" height="50"/>  
                        )
                    })}
                </div>
                </div>

                <div style={{display:this.state.hide?"none":"",margin : "20px"}} id="myresult" className="img-zoom-result"></div>
                <div style={{display:!this.state.hide?"none":"",margin : "20px"}}>
                <Card style={{ width: '18rem' ,margin : "20px"}}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                </div>
            </div>
                
            </div>
        )
    }
}
export default GoodZoom
