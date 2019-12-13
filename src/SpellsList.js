import React from "react";
import SpellCard from "./SpellCard";

const SpellsList = props => {
  // console.log(props);
  const {spell, i}=props;
  return (
    
    <div className="allItems">
      <SpellCard spell={spell} i={i} key={i}/>
   
     
    </div>
  );
};

export default SpellsList;