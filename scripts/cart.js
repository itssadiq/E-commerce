//Update Cart Quantity
import { productData } from "./products.js";

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

//Add To Cart


export function addToCart(cartQuantity, index) {
  let product;

  if (window.location.pathname.endsWith("/index.html")) {
    product = productData[index];
  } else if (window.location.pathname.endsWith("/singleProduct.html")) {
    product = JSON.parse(localStorage.getItem("singleProduct"));
  } else {
    return; // Page not supported
  }

let existingItem = undefined;

  cart.forEach((item) => {
    if (item.id === product.id) {
      existingItem = item;
    }
  });
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  saveToStorage(cart);
}


//Save To Local Storage
export function saveToStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
