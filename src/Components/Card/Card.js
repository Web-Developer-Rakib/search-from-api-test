import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://picsum.photos/200/300/?blur" alt="" />
      </div>
      <h3>Name:</h3>
      <h4>Category</h4>
      <h4>Country</h4>
    </div>
  );
};

export default Card;
