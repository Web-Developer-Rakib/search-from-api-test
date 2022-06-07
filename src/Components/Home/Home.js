import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <input
        type="text"
        className="search-box"
        placeholder="Type a meal name here"
      />
    </div>
  );
};

export default Home;
