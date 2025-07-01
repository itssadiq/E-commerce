export const cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
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
    console.log("quantity updated");
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
    console.log("product added to cart");
  }

  saveToStorage();
}
