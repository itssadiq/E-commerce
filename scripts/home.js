import { products } from "./products.js";
import { cart, addToCart } from "./cart.js";
import { updateCartIcon } from "./utils.js";

generateProducts();

generateSingleProductPageDetails();

function generateProducts() {
  const productData = products();
  let productHtml = "";
  const allProducts = document.querySelector(".products");
  for (let i = 0; i < productData.length; i++) {
    productHtml += `<div class="product-card" data-index = "${i}">
          <img class="product-img" src="${
            productData[i].images[0].img
          }" alt="" />
          <div class="product-content">
            <h2 class="product-name">${productData[i].name}</h2>
            <div class="d-flex gap-5">
              <img
                class="product-rating"
                src="${productData[i].rating}"
                alt=""
              />
              <p class="product-rating-count">(${
                productData[i].ratingCount
              })</p>
            </div>
            <div class="d-flex-products">
            <div>
              <h3 class="product-price">${
                productData[i].currency + productData[i].price
              }</h3>
              <span class="old-price">${
                productData[i].currency + productData[i].oldPrice
              }</span>
              </div>
              <button class="product-category">${
                productData[i].category
              }</</button>
            </div>
            <button class="add-to-cart" data-index = "${i}">Add To Cart</button>
          </div>
        </div>`;
  }
  allProducts.innerHTML = productHtml;
  return productHtml;
}

function generateSingleProductPageDetails() {
  const allProducts = document.querySelectorAll(".product-card");

  let singleProduct;

  allProducts.forEach((product) => {
    product.addEventListener("click", () => {
      const index = product.dataset.index;

      const productData = products();

      productData.forEach((productDetails) => {
        if (productDetails.id == index) {
          singleProduct = productDetails;

          localStorage.setItem("singleProduct", JSON.stringify(singleProduct));

          window.location.href = "singleProduct.html";
        }
      });
    });
  });
}

function createCategory() {
  const searchCategoryElement = document.querySelector(".search-categories");
  let categoryHtml = "";
  const productData = products();
  productData.forEach((product) => {
    if (!categoryHtml.includes(product.category)) {
      categoryHtml += `<option value="${product.category}">${product.category}</option>`;
    }
  });
  searchCategoryElement.innerHTML += categoryHtml;
}

createCategory();

function showCategory() {
  const categoryBtn = document.querySelector(".search-categories");
  const productData = products();
  const allProducts = document.querySelector(".products");

  categoryBtn.addEventListener("change", () => {
    let html = "";
    productData.forEach((product, index) => {
      if (
        categoryBtn.value === "All" ||
        categoryBtn.value === product.category
      ) {
        html += `<div class="product-card" data-index = "${index}">
          <img class="product-img" src="${
            productData[index].images[0].img
          }" alt="" />
          <div class="product-content">
            <h2 class="product-name">${productData[index].name}</h2>
            <div class="d-flex gap-5">
              <img
                class="product-rating"
                src="${productData[index].rating}"
                alt=""
              />
              <p class="product-rating-count">(${
                productData[index].ratingCount
              })</p>
            </div>
            <div class="d-flex-products">
            <div>
              <h3 class="product-price">${
                productData[index].currency + productData[index].price
              }</h3>
              <span class="old-price">${
                productData[index].currency + productData[index].oldPrice
              }</span>
              </div>
              <button class="product-category">${
                productData[index].category
              }</</button>
            </div>
            <button class="add-to-cart" data-index = "${index}">Add To Cart</button>
          </div>
        </div>`;
      }
      allProducts.innerHTML = html;
    });
    searchProducts();
    generateSingleProductPageDetails();
    attachAddToCart();
  });
}
showCategory();

function searchProducts() {
  const noResult = document.querySelector(".no-results-container");
  const resultQuerry = document.querySelector(".no-results-query");
  const searchInput = document.querySelector(".search-products");
  const allProducts = document.querySelectorAll(".product-card");
  searchInput.addEventListener("input", () => {
    allProducts.forEach((product) => {
      const productName =
        product.childNodes[3].childNodes[1].innerHTML.toLowerCase();
      const productCategory =
        product.childNodes[3].childNodes[5].childNodes[3].innerHTML.toLowerCase();
      if (
        productName.includes(searchInput.value.toLowerCase()) ||
        productCategory.includes(searchInput.value.toLowerCase())
      ) {
        noResult.classList.add("hide-result");
        product.style.display = "block";
      } else {
        product.style.display = "none";
        noResult.classList.remove("hide-result");
        resultQuerry.innerHTML = searchInput.value;
      }
    });
  });

  generateSingleProductPageDetails();
}
searchProducts();

function attachAddToCart() {
  const addToCartBtn = document.querySelectorAll(".add-to-cart");

  addToCartBtn.forEach((button) => {
    const productData = products();
    button.addEventListener("click", (e) => {
      e.stopPropagation();

      const index = button.dataset.index;

      const product = productData[index];

      const productId = product.id;

      addToCart(productId);

      updateCartIcon();
    });
  });
}

attachAddToCart();
