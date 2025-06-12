import { createContext } from "react";
import useSetCart from "../hooks/useSetCart";

const StateContext = createContext();

export default StateContext;

export const StateProvider = ({ children }) => {
  const [cartProducts, addToCart, decreaseQuantity] = useSetCart();

  return (
    <StateContext.Provider
      value={{ cartProducts, addToCart, decreaseQuantity }}
    >
      {children}
    </StateContext.Provider>
  );
};
