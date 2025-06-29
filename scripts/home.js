import { productData } from "./products.js";
import { addToCart, saveToStorage, updateQuantity, cart } from "./cart.js";

generateProducts();
generateSingleProductPageDetails();


let cartQuantity;
  const allCartBtns = document.querySelectorAll(".add-to-cart");

function generateProducts() {
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
            <button class="add-to-cart">Add To Cart</button>
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
  productData.forEach((product) => {
    if (!categoryHtml.includes(product.category)) {
      categoryHtml += `<option value="${product.category}">${product.category}</option>`;
    }
  });
  searchCategoryElement.innerHTML += categoryHtml;
}

createCategory();

function showCategory() {
  const noResult = document.querySelector(".no-results-container");
  const searchInput = document.querySelector(".search-products");

  const categoryBtn = document.querySelector(".search-categories");
  const allProducts = document.querySelector(".products");

  categoryBtn.addEventListener("change", () => {
    let html = "";

    productData.forEach((product, i) => {
      noResult.classList.remove("show-result");
      searchInput.value = "";
      if (
        categoryBtn.value === "All" ||
        categoryBtn.value === product.category
      ) {
        html += `<div class="product-card" data-index = "${i}">
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
            <button class="add-to-cart">Add To Cart</button>
          </div>
        </div>`;
      }
      allProducts.innerHTML = html;
    });
    searchProducts();
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
        noResult.classList.remove("show-result");
        product.style.display = "block";
      } else {
        product.style.display = "none";
        noResult.classList.add("show-result");
        resultQuerry.innerHTML = searchInput.value;
      }
    });
  });
}

searchProducts();

//Cart Related Functions
addToCart(cartQuantity);
saveToStorage(cart);
updateQuantity(cartQuantity);
