import React, { useContext } from "react";
import { CartContext } from "../../context/cart";

function Cart() {
  const { productsCart } = useContext(CartContext);

  return (
    <div>
      <h1>Products on shopping cart</h1>
      <p>{JSON.stringify(productsCart)}</p>
    </div>
  );
}

export default Cart;
