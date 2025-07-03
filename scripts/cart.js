import { getProduct } from "./products.js";
import { darkmode, navScroll, updateCartCount } from "./utils.js";

export const cart = JSON.parse(localStorage.getItem("cart")) || [];
darkmode();
updateHeading();
renderCartSummary();
renderPaymentSummary();
window.addEventListener("scroll", navScroll);

//TODO Make Update And Delete Buttons Interactive Sadiq

function updateHeading() {
  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const headingEl = document.querySelector(".cart-heading");

  if (headingEl) {
    headingEl.innerHTML = `Shopping Cart(${totalQuantity} items)`;
  }
}

//Add To Cart

//TODO Before Adding To Cart Check Stock Availablity And Show Relevant Alerts Talha

export function addToCart(productId, selectorValue) {
  let matchingProduct;

  cart.forEach((cartItem) => {
    if (cartItem.productId == productId) {
      matchingProduct = cartItem;
    }
  });

  if (matchingProduct) {
    matchingProduct.quantity += selectorValue ? selectorValue : 1;
  } else {
    cart.push({
      productId,
      quantity: selectorValue ? selectorValue : 1,
    });
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
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    let quantity = 0;

    if (productId == matchingProduct.id) {
      quantity += cartItem.quantity;
    }

    const html = `
      <div class="cart-page-item">
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

  const cartItemsEl = document.querySelector(".main-cart-items");

  if (cartItemsEl) {
    cartItemsEl.innerHTML = cartItemsHTML;
  }
}

function renderPaymentSummary() {
  let paymentSummaryHTML = "";

  let price = 0;

  let quantity = 0;
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    if (productId == matchingProduct.id) {
      price += matchingProduct.price;
      quantity += cartItem.quantity;
    }
  });

  const html = `
    <h3 class="order-header">Order Summary</h3>
        <div class="payment-summary">
          <div class="payment-summary-row">
          <div class="payment-summary-title">Items(${quantity}):</div>
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
