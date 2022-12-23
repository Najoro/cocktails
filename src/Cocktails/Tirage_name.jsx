import React from 'react';
import EatchCocktails from '../components/EatchCocktails';
import { useRef } from 'react';
import { useState } from 'react';

const Tirage_name = () => {
  const [searching , setSearching] = useState('');
  const input = useRef("");

  function handelClick(){
   setSearching(input.current.value)
  }
  return (
      <div className='tirage'>
        <div className="search">
            <span>
              <input type="text" placeholder="cocktail Name" ref = {input} />
              <input type="button" value="Recherche" onClick={handelClick}/>
            </span>
        </div>
        <EatchCocktails search= {searching} urls = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="/>
      </div>
  );
};

export default Tirage_name;

