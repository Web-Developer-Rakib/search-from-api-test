import React from "react";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <input
        type="text"
        className="search-box"
        placeholder="Type a meal name here"
      />
      <section className="card-section">
        <Card></Card>
      </section>
    </div>
  );
};

export default Home;
