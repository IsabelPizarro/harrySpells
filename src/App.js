import React, { Component } from 'react';
import './App.css';
import { service } from "./service";
import SpellsList from './SpellsList';
import Loader from './Loader';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
     
    };
    // this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    service().then(data => {
      // console.log(data);
      this.setState({ spells: data });
    });
  }
  render() {
    const {spells}=this.state;
    
  
    return (
      <div className="App">
        <div className="App-header">
          <h2>Buscador hechizos de Harry Potter</h2>
        </div>
        <div className="cardsContainer">
          {spells.map((spell,i)=>(
            (spell==="")? {Loader}:
                 
 <SpellsList spell={spell} o={i}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
