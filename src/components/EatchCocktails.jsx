import React from 'react';
import Fetch from '../components/Fetch';


const EatchCocktails = ({search, urls}) => {
  const url = urls + search;
  const cocktail = Fetch(search,url);
  const {items , loading} = cocktail;
  const {drinks} = items;

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
      <ul className="cocktail-contenaire">
      {drinks.map((drink) => (
        <li key={drink.idDrink} className = "cocktail-eacth">
          <div className="name-contenaire">
            <h1> {drink.strDrink}</h1>
            <img src ={drink.strDrinkThumb} alt={drink.idDrink} />
          </div>
          <span>
            <p className="date"><strong>Modif</strong>: {drink.dateModified}</p>
            <p> <strong>Cathegorie</strong>: {drink.strCategory}</p>
            <p> <strong>type</strong>: {drink.strAlcoholic}</p>
            <p> <strong>Glass</strong>: {drink.strGlass}</p>
          </span>
        </li>
      ))}
      </ul>
    )
  }

  if(drinks == undefined){
    return(
         <h1 className='resultError'>NO RESULT <span>Try again</span></h1>
    )
  }
}
export default EatchCocktails;