import { getProduct } from "./products.js";

export const cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getTotalCartQuantity() {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return totalQuantity;
}

const totalQuantity = getTotalCartQuantity();

const heading = document.querySelector(".cart-heading");

if (heading) {
  heading.innerHTML = `Shoppig Cart (${totalQuantity} items)`;
}

export function addToCart(productId) {
  let matchingProduct;

  cart.forEach((cartItem) => {
    if (cartItem.productId == productId) {
      matchingProduct = cartItem;
    }
  });

  if (matchingProduct) {
    matchingProduct.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
  }

  saveToStorage();
}

function renderCartItems() {
  let cartItemsHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let quantity = 0;

    const matchingProduct = getProduct(productId);

    if (matchingProduct.id === cartItem.productId) {
      quantity = cartItem.quantity;
    }

    const html = `
      <div class="cart-item">
          <div class="image-name">
            <img
              src="${matchingProduct.images[0].img}"
              alt=""
              class="product-image"
              />
              <div class="name-price">
              <h4>${matchingProduct.name}</h4>
              <p class="price">Rs ${matchingProduct.price}</p>
              <p class="quantity">Quantity: ${quantity}</p>
              </div>
              </div>
              <div class="cart-item-handles">
            <span class="update-quantity">Update</span>
            <input type="text" class="quantity-input" />
            <span class="save-quantity">Save</span>

            <i class="fa-solid fa-trash"></i>
            <p class="calculated-price">Rs ${
              matchingProduct.price * quantity
            }</p>
          </div>
        </div>
    `;

    cartItemsHTML += html;
  });
  const cartItemsContainer = document.querySelector(".main-cart-items");

  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = cartItemsHTML;
  }
}

renderCartItems();
