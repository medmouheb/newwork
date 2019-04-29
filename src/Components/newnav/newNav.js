import React,{Component} from 'react'
import './newNav.css';


class NewNAvbar extends Component{
    render(){
        return(
          <div>
        <div id="navbar">
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