import React, { useEffect, useRef, useState } from 'react';
import Fetch, { Fetch_noSearch } from '../components/Fetch';


const NameTirage = ({search}) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
  const cocktail = Fetch(search,url);
  const {items , loading} = cocktail;
  const {drinks} = items;
  console.log(loading);
  if(loading){
    return (
      <>
          <h1>WAIT PLEASE</h1>
          <h1 className='custom-loader'></h1>
      </>
      )
  }
  if(drinks){
    return(
      <>
        <ul className="cocktail-contenaire">
          {drinks.map((drink) => (
            <li key={drink.idDrink} className = "cocktail-eacth ">
                <h1> {drink.strDrink}</h1>
                <img src ={drink.strDrinkThumb} alt={drink.idDrink} />
            </li>
          ))}
        </ul>
      </>
    )
  }

  if(drinks == undefined){
    return(
         <h1 className='resultError'>NO RESULT <span>Try again</span></h1>
    )
  }
}


const Tirage_ingredient = () => {
  //liste tous les ingredient
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
  const ingredients = Fetch_noSearch(url);
  const {drinks} = ingredients;
  const [one , setOne] = useState('Creme de Cassis')
  // fonction de fusion
  
  const OnRefreche = function(e){
    setOne(e.target.id);
  }
  console.log(one);
  return (
      <div className='ingredient-contenaire'>
        <div>
          <h2>choise your favorite ingredient</h2>
        {drinks && (
          <ul className='liste-ingredient'>
            {drinks.map((drink) => (
              <li key={drink.strIngredient1} >
                  <input type="radio" name='input' onClick={OnRefreche} id={drink.strIngredient1}/>
                  <label htmlFor={drink.strIngredient1}>{drink.strIngredient1}</label>
              </li>))}
          </ul>
        )}
        </div>
        <div className="result-ingredient">
            <h3>choise : <span>{one}</span></h3>
            <NameTirage search= {one}/>
        </div>
      </div>
  );
};

export default Tirage_ingredient;

/**
 * liste tous les ingredien du cocktails
 * si on click sur une ingredient
 *    il fitre le cocktail correspondant 
 *par defaut les liste des cocktails est sur une ingredient "Vodka"
 */