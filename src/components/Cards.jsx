import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Take a Look at our New Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Cobalt is an indoor security guard robot that can recognize faces"
              label="Security"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="The Hand Arm System is designed to have the size, strength, and speed of a human arm."
              label="Medical"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Nao is a small humanoid robot designed to interact with people"
              label="leisure"
              path="/products"
            />
            <CardItem
              src="images/img-4.jpg"
              text="The da Vinci is a surgical robot designed for minimally invasive procedures"
              label="Factory's"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="emi is an intelligent home assistant robot that responds to your voice"
              label="Restaurants"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
