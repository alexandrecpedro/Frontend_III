import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { ThemeContext } from "../../context/theme";
import { data } from "../../data/data";
import "./styles.css";

export default function Home() {
  const { username, addProductToCart, removeProductFromCart } =
    useContext(CartContext);

  const { theme, handleTheme } = useContext(ThemeContext);

  const [products] = useState(data);

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <button onClick={handleTheme}>Change theme</button>
      {products.map((product) => (
        <div className={`cart ${theme}`}>
          <div className="container">
            <h2>{product.name}</h2>
            <h3>R${product.price},00</h3>
            <button onClick={() => addProductToCart(product.id)}>+</button>
            <button onClick={() => removeProductFromCart(product.id)}>-</button>
          </div>
          <img src={product.image} />
        </div>
      ))}
      <Link to="/cart">Look cart</Link>
    </div>
  );
}
