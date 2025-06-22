import { products } from "./products.js";
function generateProducts() {
  const productData = products();

  let productHtml = "";
  const allProducts = document.querySelector(".products");
  for (let i = 0; i < productData.length; i++) {
    productHtml += `<div class="product-card">
          <img class="product-img" src="${productData[i].img}" alt="" />
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
              <h3 class="product-price">${
                productData[i].currency + productData[i].price
              }</h3>
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

generateProducts();
