import React, { createContext, useState } from 'react';

export const CartContext = createContext();


export default function UseCartContext({ children }){

  const [cart, setCart] = useState([]); // objeto y cantidad elegida

  function guardarEstadoCart(item) {
    setCart()
  }


  return (
    <CartContext.Provider
      value={{
        cart,
        guardarEstadoCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

