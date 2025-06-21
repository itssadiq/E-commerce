function navScroll() {
  const navBar = document.querySelector(".navbar");
  if (window.scrollY > 200) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", navScroll);
