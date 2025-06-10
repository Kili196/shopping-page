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
