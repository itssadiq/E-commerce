const singleProduct = JSON.parse(localStorage.getItem("singleProduct"));

generateProduct();
stockColor();

function generateProduct() {
  const html = `
        <div class="product-images">
        <div class="main-image">
          <img
            src="${singleProduct.images[0].img}"
            alt=""
            class="main-image1"
          />
        </div>
        <div class="secondary-images">
          <img
            src="${singleProduct.images[0].img}"
            alt=""
            class="secondary-image1 all-images active-image"
          />
          <img
            src="${singleProduct.images[0].img1}"
            alt=""
            class="secondary-image2 all-images"
          />
          <img
            src="${singleProduct.images[0].img2}"
            alt=""
            class="secondary-image3 all-images"
          />
        </div>
      </div>
      <div class="product-details">
        <h2>${singleProduct.name}</h2>
        <div class="ratings">
          <img src="${singleProduct.rating}" alt="" class="rating-stars" />
          <span class="rating">${singleProduct.ratingCount}</span>
          <span class="review-count">(${
            singleProduct.reviewCount
          } reviews)</span>
        </div>

        <div class="prices">
          <span class="price">${
            singleProduct.currency + singleProduct.price
          }</span>
          <span class="old-price">${
            singleProduct.currency + singleProduct.oldPrice
          }</span>
        </div>

        <div class="product-description">
          ${singleProduct.description}
        </div>

        <div class="features">
          <h3>Key Features:</h3>
          <ul>
            <li><span class="mark">✔</span> ${singleProduct.features[0]}</li>
            <li><span class="mark">✔</span> ${singleProduct.features[1]}</li>
            <li><span class="mark">✔</span> ${singleProduct.features[2]}</li>
            <li><span class="mark">✔</span> ${singleProduct.features[3]}</li>
            <li><span class="mark">✔</span> ${singleProduct.features[4]}</li>
          </ul>
        </div>

        <div class="quantity-selector">
          Quantity:
          <select name="" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button class="add-to-cart">Add to Cart</button>

        <div class="status">
          <ul>
            <li class="stock">${singleProduct.stock}</li>
          </ul>
        </div>
      </div>
    `;

  document.querySelector(".main").innerHTML = html;
}

function stockColor() {
  const stock = document.querySelector(".stock");

  if (stock.innerHTML === "Limited Stock") {
    stock.classList.add("limited-stock");
  } else if (stock.innerHTML === "Out of Stock") {
    stock.classList.add("out-of-stock");
  }
}

function switchImage() {
  const coverImage = document.querySelector(".main-image1");
  const allImages = document.querySelectorAll(".all-images");

  allImages.forEach((product) => {
    product.addEventListener("click", () => {
      allImages.forEach((img) => img.classList.remove("active-image"));

      coverImage.src = product.src;
      product.classList.add("active-image");
    });
  });
}

switchImage();
