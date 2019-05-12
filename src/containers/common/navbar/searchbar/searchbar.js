import React, { Component } from 'react';
import Autocomplete from "./autocomplete";
import './search.css';
import { Form, Button, Col } from 'react-bootstrap';
let tab = [
  "Alligator",
  "Bask",
  "Crocodilian",
  "Death Roll",
  "Eggs",
  "Jaws",
  "Reptile",
  "Solitary",
  "Tail",
  "Wetlands"
]
class Searchbar extends Component {
  state = { search: "" }
  render() {
    return (
      <div className="search">
        <div className="searchAria">
        <input type="text" onChange={(e) => { this.setState({ search: e.target.value }) }} />
        <div className="searchResultContainer">
        <ul className="searchResult"  style={{display:this.state.search.length?"":"none"}}>
            {tab.filter(el => { return (el.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) }).map(el => {
              return (<li>{el}</li>)
            })}
          </ul>
        </div>
          
        </div>
        <div>
          <button>serch</button>
        </div>
        
      </div>

    )
  }
}
export default Searchbar