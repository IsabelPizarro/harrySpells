import React, { Component } from 'react';
import './App.css';
import { service } from "./service";
import SpellsList from './SpellsList';
import Filter from "./Filter";
import Loader from './Loader';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      value:"",
      filteredValue:"",
     
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    service().then(data => {
      this.setState({ spells: data });
    });

  }
  handleInput(event) {
    const lookFor = event.currentTarget.value;
    this.setState({ value: lookFor });
    // console.log(lookFor);
  }
  handleSubmit(event){
   event.preventDefault();
   debugger;
    console.log("hola");
    console.log(this.state.value);
    console.log(event.target);
    this.setState({ filteredValue: this.state.value });
    console.log(this.state.filteredValue);
  }
  render() {
    const {spells, value}=this.state;
    
  
    return (
      <div className="App">
        <div className="App-header">
          <h2>Harry Potter Spell Finder</h2>
          <Filter
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          value={value}
          
        />
        </div>
        <div className="cardsContainer">
          {spells.filter(lookSpell =>
          lookSpell.spell
         .toUpperCase()
          .includes(value.toUpperCase())).map((spell,i)=>(
            (spell===[])? <Loader/>:                
            <SpellsList spell={spell} key={i}/>
          ))}
        </div>
        <Loader/>
      </div>
    );
  }
}

export default App;
