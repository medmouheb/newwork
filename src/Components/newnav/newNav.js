import React,{Component} from 'react'
import './newNav.css';
const tab=[
 { name:"liste",
  category:[
  {
    name:"product k",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product j",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product ll",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product kk",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product 154",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product 0000",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  }
]},
{ name:"liste",
category:[
  {
    name:"product k",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product j",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product ll",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product kk",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product 154",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  },
  {
    name:"product 0000",
    list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
  }
]}
]

class NewNAvbar extends Component{
    render(){
        return(
          <div>
        <div id="navbar">
        {tab.map(element=>{
          return(
            <div id="dropdown">
            <button id="dropbtn">{element.name}
              <i id="fa fa-caret-down" />
            </button>
            <div id="dropdown-content">  
              <div id="row">
              {element.category.sort(function(a, b){return 0.5 - Math.random()}).map(el=>{
                return(
                  <div id="column">
                  <h3>{el.name}</h3>
                  {el.list.sort(function(a, b){return 0.5 - Math.random()}).map(elem=>{
                    return(<a href="#">{elem}</a>)
                  })}
                </div>
                )
              })}
                
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
        <div style={{padding: '16px'}}>
          <h3>Responsive Mega Menu (Full-width dropdown in navbar)</h3>
          <p>Hover over the "Dropdown" link to see the mega menu.</p>
          <p>Resize the browser window to see the responsive effect.</p>
        </div>
      </div>
        )
    }
}
export default NewNAvbar