import { products } from "./products.js";

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
            <button class="add-to-cart">Add To Cart</button>
          </div>
        </div>`;
  }
  allProducts.innerHTML = productHtml;
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
