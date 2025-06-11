import { useState } from "react";

export default function useSetCart() {
  const [cartProducts, setProducts] = useState([]);

  /**   const setCart = (products) =>
    setProducts((prevProducts) => [...prevProducts, products]); */

  const addToCart = (product) => {
    setProducts((prevProducts) => {
      let copiedProducts = [...prevProducts];

      let findProduct = copiedProducts.find(
        (element) => element.id === product.id
      );

      if (findProduct) {
        console.log("hiii");
        copiedProducts = copiedProducts.map((element) => {
          if (element.id === product.id) {
            return { ...element, quantity: element.quantity + 1 };
          } else {
            return element;
          }
        });
      } else {
        copiedProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          img: product.image,
          quantity: 1,
        });
      }

      return copiedProducts;
    });
  };

  const decreaseQuantity = (product) => {
    setProducts((prevProducts) => {
      let copiedProducts = [...prevProducts];

      console.log(copiedProducts);

      if (product.quantity <= 1) {
        copiedProducts = copiedProducts.filter((item) => item.id != product.id);
      } else {
        copiedProducts = copiedProducts.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item };
          }
        });
      }

      return copiedProducts;
    });
  };

  return [cartProducts, addToCart, decreaseQuantity];
}
