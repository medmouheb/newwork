import React, { Component } from 'react';
import Autocomplete from "./autocomplete";
import './search.css';
import {Form,Button,Col} from 'react-bootstrap';

class Searchbar extends Component {
    render() {
      return (
      <div className="search">

          <Autocomplete
          suggestions={[
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
          ]}
        />

         
      </div>
      
      )
    }
}
export default Searchbar