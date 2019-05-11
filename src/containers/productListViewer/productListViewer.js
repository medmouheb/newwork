import React,{Component} from 'react'
import SimpleProduct from './grid/SimpleProduct'
import ListOfProducts from './grid/listProduct'
import {Container,Row,Col,Form,Pagination,ButtonGroup,Button} from 'react-bootstrap'
import { connect } from 'react-redux'
class ProductListViewer extends Component{
    state={
        currentPage:1,
        itemNumber:4,
        triMethod:"",
        display:"grid",
        pages:[]
    }
    componentWillMount(){
        let tab=[]
        for(let i=0;i<Math.ceil(this.props.products.length/this.state.itemNumber);i++){
            tab.push(i+1)
        }
        this.setState({pages:tab})
    }

    render(){
        const {products}=this.props
        const currentProducts=products.filter((el,i)=>{
            return (i<this.state.currentPage*this.state.itemNumber && i>this.state.currentPage*this.state.itemNumber-this.state.itemNumber-1 )
        })
        const handlePage=(i)=>{
            this.setState({currentPage:i+1})
        }
        const handleItems=(event)=>{
           this.setState({itemNumber: event.target.options[event.target.selectedIndex].value})
           let tab=[]
            for(let i=0;i<Math.ceil(this.props.products.length/event.target.options[event.target.selectedIndex].value);i++){
                tab.push(i+1)
            }
            this.setState({pages:tab})
        }
        return(
            <Container>
                <Row style={{backgroundColor:"gray"}}>
                    <Col>
                        <Form>
                        <Form.Group  controlId="exampleForm.ControlSelect1">
                        <Row>
                            <Col>
                                <Form.Label >nomber of items</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control onChange={(event)=>{handleItems(event)}}   as="select">
                                <option>4</option>
                                <option >8</option>
                                <option >12</option>
                                <option >16</option>
                                <option >20</option>
                                </Form.Control>
                            </Col>
                        </Row>                      
                        </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Pagination>
                            { this.state.pages.map((el,i)=>{
                                return(
                                    <Pagination.Item onClick={()=>{handlePage(i)}} active={this.state.currentPage===i+1?true:false}  >{el}</Pagination.Item>  
                                )
                            })}
                        </Pagination>
                    </Col>
                    <Col>
                        <ButtonGroup className="mr-2" aria-label="First group">
                            <Button onClick={()=>{this.setState({display:'grid'})}} variant="secondary">GRID</Button>
                            <Button onClick={()=>{this.setState({display:'list'})}} variant="secondary">LIST</Button>
                        </ButtonGroup>
                    </Col>
                    <Col  xs={2}>
                        <Form>
                        <Form.Group  controlId="exampleForm.ControlSelect1">
                        <Row>
                            <Col>
                                <Form.Label >tri</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control   as="select">
                                <option>--</option>
                                <option>Le moins cher</option>
                                <option>Le plus cher</option>
                                <option>De A à Z</option>
                                <option>De Z à A</option>
                                </Form.Control>
                            </Col>
                        </Row>                      
                        </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    {this.state.display==='grid'?<SimpleProduct  data={currentProducts}/>:<ListOfProducts data={currentProducts}/>}
                    
                    
                </Row>
                
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products,
    }
}
export default connect(mapStateToProps)(ProductListViewer)
