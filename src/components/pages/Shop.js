import React, { useEffect, useState } from "react";
import "../../App.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const items = [
    {
      id: 225,
      name: "Cobalt",
      price: 1000000,
    },
    {
      id: 226,
      name: "Cobalt",
      price: 1000000,
    },
    {
      id: 228,
      name: "Cobalt",
      price: 1000000,
    },
    {
      id: 227,
      name: "Cobalt",
      price: 1000000,
    },
    { id: 229, name: "Cobalt", price: 1000000 },
    { id: 230, name: "Cobalt", price: 1000000 },
  ];

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const carttItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="add" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return <div>{listItems}</div>;
};
export default Shop;
