import { useEffect } from "react";

export default function useProducts() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Page not found! 404");
        }

        return response.json();
      })
      .then((data) => console.log(data));
  }, []);
}
