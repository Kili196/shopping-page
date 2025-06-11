import { useState } from "react";

export default function useSetCart() {
  const [cartProducts, setProducts] = useState(new Map());

  /**   const setCart = (products) =>
    setProducts((prevProducts) => [...prevProducts, products]); */

  const addToCart = (product) => {
    setProducts((prevProducts) => {
      let copiedProducts = new Map(prevProducts);

      if (copiedProducts.has(product.id)) {
        let currentProduct = copiedProducts.get(product.id);
        copiedProducts.set(product.id, {
          ...currentProduct,
          quantity: currentProduct.quantity + 1,
        });
      } else {
        copiedProducts.set(product.id, {
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
      let copyProducts = new Map(prevProducts);

      let foundProduct = copyProducts.get(product.id);

      if (foundProduct.quantity <= 1) {
        copyProducts.delete(foundProduct.id);
      } else {
        copyProducts.set(foundProduct.id, {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        });
      }

      return copyProducts;
    });
  };

  return [cartProducts, addToCart, decreaseQuantity];
}
