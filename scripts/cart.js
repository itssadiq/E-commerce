//Update Cart Quantity
import { productData } from "./products.js";
export const cart = JSON.parse(localStorage.getItem("cart")) || [];

//Add To Cart

export function addToCart(cartQuantity, index) {
  const cartProduct = productData[index];

  let existingItem = undefined;

  cart.forEach((item) => {
    if (item.id === cartProduct.id) {
      existingItem = item;
    }
  });

  if (!existingItem) {
    cartQuantity = 1;
    cartProduct.quantity = cartQuantity;
    cart.push(cartProduct);
    saveToStorage(cart);
  } else {
    existingItem.quantity += 1;
    saveToStorage(cart);
  }
}

//Save To Local Storage
export function saveToStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
