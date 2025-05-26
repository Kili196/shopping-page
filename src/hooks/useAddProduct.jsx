import { useState } from "react";

export default function useAddProduct(initialValue) {
  const [products, setProducts] = useState(initialValue);

  const addProduct = (products) =>
    setProducts((prevProducts) => [...prevProducts, products]);

  return [products, addProduct];
}
