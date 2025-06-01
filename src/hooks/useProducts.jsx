import { useEffect, useState } from "react";

export default function useProducts() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Page not found! 404");
        }

        return response.json();
      })
      .then((data) => setProducts(data));
  }, []);

  return products;
}
