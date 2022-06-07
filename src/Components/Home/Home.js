import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchTxt]);
  return (
    <div className="home">
      <input
        type="text"
        className="search-box"
        placeholder="Type a meal name here"
        onChange={(e) => setSearchTxt(e.target.value)}
      />
      <section>
        {searchTxt === "" ? (
          <div className="ins-txt">
            <h3>Please type a meal name above.</h3>
            <i>Example: fish pie, Dal fry, Lamb Biryani</i>
          </div>
        ) : meals === null ? (
          <h3>Meal not found!</h3>
        ) : (
          <div className="card-section">
            {meals.map((meal) => (
              <Card meal={meal}></Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
