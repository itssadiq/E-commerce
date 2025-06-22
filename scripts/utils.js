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

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", navScroll);
  cartToggle();
  darkmode();
});
