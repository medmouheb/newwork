import React, { Component } from 'react';
import { connect } from 'react-redux'
import './filter.css'
import {Form,Button,Col,Accordion,Card,Fade} from 'react-bootstrap';
import {filterProduct} from '../../actions/product'
const list=[
    {
        label:"categories",
        fade:true,
        variety:[
            "nokia",
            "apple",
            "sumsung"
        ],
    },
    {
        label:"products",
        fade:true,
        variety:[
            "phone",
            "pc",
            "labtop"
        ]
    },
    {
        label:"stockage",
        fade:true,
        variety:[
            "8G",
            "16G",
            "32G"
        ]
    },
    {
        label:"prices",
        fade:true,
        variety:[
            "Under $25",
            "$25 to $50",
            "$50 to $100",
            "$100 to $200",
            "$200 & Above"
        ]  
    }
]

class Filter extends Component{
    state={
        priceFrom: 30,
        priceTo: 100,
        condition:list.map(el=>{return {...el,variety:[]}}),
        fadeBoolean:list.map(el=>{return el.fade})
    }
    render(){
        const handleClick=()=>{
            this.props.filterProduct(this.state)
        }
        const handleFilter=(event,ind,el)=>{
            if(event.target.checked){
                this.state.condition[ind].variety.push(el)
                this.props.filterProduct(this.state.condition)
            } 
            else{
                let tab=this.state.condition[ind].variety.filter(element=>{return element!==el})
                this.state.condition[ind].variety=tab
                this.props.filterProduct(this.state.condition)
            }
        }
        return(
            <div className="sidefilter">
            {list.map((element,ind)=>{
                return(
                    <div>
                    <Button 
                    block
                onClick={() => {let tab =this.state.fadeBoolean;tab[ind]=!tab[ind];this.setState({fadeBoolean:tab})}}
                aria-controls="example-fade-text"
                >
                {element.label}
                </Button>
                <div style={{display:this.state.fadeBoolean[ind]?"block": "none"}} >
                <Fade in={this.state.fadeBoolean[ind]}>
                <div id="example-fade-text">
                {element.variety.map(el=>{
                                 return(
                                     <Form.Check  onClick={(event)=>{handleFilter(event,ind,el)}} type='checkbox'  label={el}/>
                                 )})}
                </div>
                </Fade>
                </div>
                </div>
                )
            })}

            </div>
        )
        return(
            <div className="sidefilter container">
                <Form>
                    <Accordion defaultActiveKey={0}>
                    {list.map((element,ind)=>{
                        return(
                            <Card>
                            <Card.Header>
                            <Accordion.Toggle   as={Button} variant="link" eventKey={ind}>
                                {element.label}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={ind}>
                            <Card.Body>
                                {element.variety.map(el=>{
                                 return(
                                     <Form.Check  onClick={(event)=>{handleFilter(event,ind,el)}} type='checkbox'  label={el}/>
                                 )
                             })}
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>  
                        
                        )
                    })}
                    </Accordion>
                    



                    <Button onClick={handleClick}>search</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return"hey"
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        filterProduct: (data) => dispatch(filterProduct(data))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Filter)