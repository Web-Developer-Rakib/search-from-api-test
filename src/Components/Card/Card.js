import React from "react";
import "./Card.css";

const Card = ({ meal }) => {
  const { idMeal, strMealThumb, strMeal, strCategory, strArea } = meal;
  return (
    <div className="card" key={idMeal}>
      <div className="card-img">
        <img src={strMealThumb} alt="" width={300} />
      </div>
      <h3>Name: {strMeal}</h3>
      <h4>Category: {strCategory}</h4>
      <h4>Country: {strArea}</h4>
    </div>
  );
};

export default Card;
