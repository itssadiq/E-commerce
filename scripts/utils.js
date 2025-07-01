import { cart, saveToStorage } from "./cart.js";

function navScroll() {
  const navBar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
}

function darkmode() {
  const darkmodeBtn = document.querySelector(".toggle-switch");
  darkmodeBtn.addEventListener("change", () => {
    let rootElement = document.documentElement;
    if (!rootElement.classList.contains("darkmode")) {
      rootElement.classList.add("darkmode");
    } else {
      rootElement.classList.remove("darkmode");
    }
  });
}

function cartToggle() {
  const cartIcon = document.querySelector(".cart-icon-wrapper");
  const cartSidebar = document.querySelector(".cart-sidebar");
  const cartOverlay = document.querySelector(".cart-overlay");
  const closeCart = document.querySelector(".close-cart");

  // Toggle cart sidebar
  cartIcon.addEventListener("click", function () {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling when cart is open
  });

  // Close cart sidebar
  function closeCartSidebar() {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Restore scrolling
  }

  closeCart.addEventListener("click", closeCartSidebar);
  cartOverlay.addEventListener("click", closeCartSidebar);

  // Close cart when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeCartSidebar();
    }
  });
}

export function updateCartCount() {
  const cartQuantityElement = document.querySelector(".cart-count");
  let cartCount = 0;
  cart.forEach((q) => {
    cartCount += q.quantity;
  });

  cartQuantityElement.innerHTML = cartCount;
}

export function renderCart() {
  const cartContainer = document.querySelector(".cart-items");

  let cartHtml = "";
  cart.forEach((data) => {
    cartHtml += `<div class="cart-item">
  <img src="${data.images[0].img}" alt="" />
  
  <div>
  <p class="cart-name">${data.name}</p>
  <p class="cart-price">${data.currency + data.price}</p>
  <div class="d-flex">
  <span class="cart-delete">remove</span>
  <span class="cart-quantity">${data.quantity}</span>
  </div>
  </div>
  </div>`;
  });
  cartContainer.innerHTML = cartHtml;
  deleteCart();
}

export function deleteCart() {
  const deleteBtns = document.querySelectorAll(".cart-delete");
  deleteBtns.forEach((delBtn, index) => {
    delBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      saveToStorage(cart);
      renderCart();
      updateCartCount();
    });
  });
}
export function showAlert() {
  const modal = document.getElementById("cartModal");
  cart.forEach(() => {
    modal.innerHTML = ` <div class="cart-modal-content">
    <div class="cart-modal-icon">✓</div>
    <div class="cart-modal-text">Added To Cart</div>
    </div>`;
  });
  modal.classList.remove("show");

  void modal.offsetWidth;

  modal.classList.add("show");

  setTimeout(() => {
    modal.classList.remove("show");
  }, 1000);
}

window.addEventListener("scroll", navScroll);
renderCart();
cartToggle();
darkmode();
