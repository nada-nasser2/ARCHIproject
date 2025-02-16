const scrollBar = document.querySelector(".scroll_bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollBar.style.display = "flex";
  } else {
    scrollBar.style.display = "none";
  }
});
