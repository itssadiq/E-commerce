//Update Cart Quantity

import { productData } from "./products.js";
// import { updateCartCount } from "./utils.js";
//FIXME Rewamp This Cart Array Sadiq

//TODO Make Update And Delete Buttons Interactive Sadiq
export const cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalQuantity = 0;

cart.forEach((cartItem) => {
  totalQuantity += cartItem.quantity;
});

const headingEl = document.querySelector(".cart-heading");

if (headingEl) {
  headingEl.innerHTML = `Shopping Cart(${totalQuantity} items)`;
}
// updateCartCount();
renderCartSummary();
renderPaymentSummary();

//Add To Cart

//TODO Before Adding To Cart Check Stock Availablity And Show Relevant Alerts Talha

//TODO Rewamp This Add To Cart Sadiq

export function addToCart(cartQuantity, index) {
  let product;

  if (
    window.location.pathname.endsWith("/index.html") ||
    window.location.pathname.endsWith("/")
  ) {
    product = productData[index];
  } else if (window.location.pathname.endsWith("/singleProduct.html")) {
    product = JSON.parse(localStorage.getItem("singleProduct"));
  } else {
    return;
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

function renderCartSummary() {
  let cartItemsHTML = "";

  cart.forEach((cartItem) => {
    const html = `
      <div class="cart-page-item">
      <div class="image-name">
      <img
      src="${cartItem.images[0].img}"
      alt=""
      class="product-image"
      />
            <div class="name-price">
              <h4>${cartItem.name}</h4>
              <p class="price">Rs ${cartItem.price}</p>
              <p class="quantity">Quantity: ${cartItem.quantity}</p>
            </div>
          </div>
          <div class="cart-item-handles">
            <span class="update-quantity">Update</span>
            <input type="text" class="quantity-input" />
            <span class="save-quantity">Save</span>
            
            <i class="fa-solid fa-trash"></i>
            <p class="calculated-price">Rs ${
              cartItem.price * cartItem.quantity
            }</p>
            </div>
            </div>
    `;

    cartItemsHTML += html;
  });

  const cartItemsEl = document.querySelector(".main-cart-items");

  if (cartItemsEl) {
    cartItemsEl.innerHTML = cartItemsHTML;
  }
}

function renderPaymentSummary() {
  let paymentSummaryHTML = "";

  let price = 0;

  cart.forEach((cartItem) => {
    price += cartItem.price * cartItem.quantity;
  });

  const html = `
    <h3>Order Summary</h3>
        <div class="payment-summary">
          <div class="payment-summary-row">
          <div class="payment-summary-title">Items(${totalQuantity}):</div>
          <div class="payment-summary-money">Rs ${price}</div>
          </div>
          
          <div class="payment-summary-row">
          <div class="payment-summary-title">Shipping & handling:</div>
          <div class="payment-summary-money">Rs 100</div>
          </div>
          
          <div class="payment-summary-row">
          <div class="payment-summary-title">Estimated Tax:</div>
            <div class="payment-summary-money">Rs 50</div>
            </div>
            </div>
            <div class="payment-summary-row order-total">
            <div class="payment-summary-title"><h3>Total</h3></div>
            <div class="payment-summary-money total-money"><h3>Rs ${
              price + 150
            }</h3></div>
            </div>
            `;

  const cartSummaryEl = document.querySelector(".cart-summary");

  if (cartSummaryEl) {
    cartSummaryEl.innerHTML = html;
  }
}

// updateCartCount();
// renderCart();
