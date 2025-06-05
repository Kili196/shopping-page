import { useState } from "react";

export default function useSetCart() {
  const [cartProducts, setProducts] = useState(new Map());

  /**   const setCart = (products) =>
    setProducts((prevProducts) => [...prevProducts, products]); */

  const addToCart = (product) => {
    if (cartProducts.has(product.id)) {
      let currentProduct = cartProducts.get(product.id);
      cartProducts.set(product.id, {
        ...currentProduct,
        quantity: currentProduct.quantity + 1,
      });
    } else {
      cartProducts.set(product.id, {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        img: product.image,
        quantity: 1,
      });
    }

    setProducts(cartProducts);
  };

  return [cartProducts, addToCart];
}
