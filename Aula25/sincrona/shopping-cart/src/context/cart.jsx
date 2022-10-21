import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([
    { id: 1, qtd: 5 },
    { id: 2, qtd: 2 },
  ]);

  const addProductToCart = (id) => {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      item[0].qtd++;
    } else {
      copyProductsCart.push({ id: id, qtd: 1 });
    }

    setProductsCart(copyProductsCart);
  };

  const removeProductFromCart = (id) => {
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      if (item[0].qtd > 1) {
        item[0].qtd--;
        setProductsCart(copyProductsCart);
      } else {
        const arrayFiltered = copyProductsCart.filter(
          (product) => product.id !== id
        );
        setProductsCart(arrayFiltered);
      }
    } else {
      alert("Esse produto não existe no carrinho");
    }
  };

  return (
    <CartContext.Provider
      value={{
        username: "Alexandre",
        productsCart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
