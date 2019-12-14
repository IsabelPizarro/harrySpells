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
s
  handleInput(event) {
    const lookFor = event.currentTarget.value;
    this.setState({ value: lookFor });
  }
  handleSubmit(event){
    event.preventDefault();
    const filt=this.state.value;
    this.setState({ filteredValue: filt });

  }
  render() {
    const {spells, value, filteredValue}=this.state;
 
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
          {(this.state.spells=="") ? <Loader/>  :
          spells.filter(lookSpell =>
          lookSpell.spell
         .toUpperCase()
          .includes(filteredValue.toUpperCase())).map((spell,i)=>(                
            <SpellsList spell={spell} key={i}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
