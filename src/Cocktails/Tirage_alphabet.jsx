import React from 'react';
import { useState } from 'react';
import EatchCocktails from '../components/EatchCocktails';


const Tirage_alphabet = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const onAlphabet = [...alphabet];
  const [one , setOne] = useState('A');

  const OnRefreche = function(e){
    setOne(e.target.id);
  }
  return (
    <div className='alphabet'>
      <EatchCocktails search={one} urls ={`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`}/>
      <ul className='alphabet-contenaire'>
        {onAlphabet.map((alphabet) => (
          <li key={alphabet}>
            <input type="radio" name="input" id={alphabet} onClick={OnRefreche}/>
            <label htmlFor={alphabet}>{alphabet}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tirage_alphabet;
/**
 * afficher 
 */