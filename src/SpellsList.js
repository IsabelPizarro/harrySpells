import React from "react";
import SpellCard from "./SpellCard";

const SpellsList = props => {
  // console.log(props);
  const {spell, i}=props;
  return (
    
    <ul className="ulList">
      <SpellCard spell={spell} i={i} key={i}/>
   
     
    </ul>
  );
};

export default SpellsList;