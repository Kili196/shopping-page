import { useState } from "react";

export default function useSetCart(initialValue) {
  const [cartProducts, setProducts] = useState(initialValue);

  const setCart = (products) =>
    setProducts((prevProducts) => [...prevProducts, products]);

  return [cartProducts, setCart];
}
