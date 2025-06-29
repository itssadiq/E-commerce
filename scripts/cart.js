//Update Cart Quantity
import { productData } from "./products.js";
export const cart = JSON.parse(localStorage.getItem("cart")) || [];

export function updateQuantity() {
  let cartQuantity = 0;
  const quantityElement = document.querySelector(".cart-count");
  const checkCart = JSON.parse(localStorage.getItem("cart")) || [];
}

//Add To Cart

export function addToCart(cartQuantity) {
  const allCartBtns = document.querySelectorAll(".add-to-cart");
  allCartBtns.forEach((addBtn, index) => {
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

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
        updateQuantity();
      }
    });
  });
}
//Save To Local Storage
export function saveToStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
