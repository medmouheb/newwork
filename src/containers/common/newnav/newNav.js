import React,{Component} from 'react'
import './newNav.css';

class NewNAvbar extends Component{
  state={letestIndex:null}  
  render(){

        return(
          <div>
        <div id="navbar">
        {this.props.data.map(element=>{
          return(
            <div id="dropdown">
            <button id="dropbtn">{element.name}
              <i id="fa fa-caret-down" />
            </button>
            <div id="dropdown-content">  
              <div id="row">
              {element.category.map((el,index)=>{
                
                  return(
                    <div id="column">
                    <h3>{el.name}</h3>
                    {el.list.map(elem=>{
                      return(<a href="#">{elem}</a>)
                    })}
                  </div>
                  )
                } )
              }
                
              </div>
            </div>
          </div> 
          )
        })}
          <div id="dropdown">
            <button id="dropbtn">Dropdown 
              <i id="fa fa-caret-down" />
            </button>
            <div id="dropdown-content">  
              <div id="row">
                <div id="column">
                  <h3>Category 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div id="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div id="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div> 
          <div id="dropdown">
            <button id="dropbtn">Dropdown 1 
              <i id="fa fa-caret-down" />
            </button>
            <div id="dropdown-content">  
              <div id="row">
                <div id="column">
                  <h3>Category 1 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div id="column">
                  <h3>Category 1 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div id="column">
                  <h3>Category 1 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div> 
          <div id="dropdown">
            <button id="dropbtn">Dropdown 2
              <i id="fa fa-caret-down" />
            </button>
            <div id="dropdown-content">  
              <div id="row">
                <div id="column">
                  <h3>Category 2 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div id="column">
                  <h3>Category 2 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div id="column">
                  <h3>Category 2 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div> 
          <div id="dropdown">
            <button id="dropbtn">Dropdown 
              <i id="fa fa-caret-down" />
            </button>
            <div id="dropdown-content">  
              <div id="row">
                <div id="column">
                  <h3>Category 1</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                <div id="column">
                  <h3>Category 2</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                  <div >
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
                </div>
                <div id="column">
                  <h3>Category 3</h3>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
        )
    }
}
export default NewNAvbar