const scrollBar = document.querySelector(".scroll_bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollBar.style.display = "flex";
  } else {
    scrollBar.style.display = "none";
  }
});

const buttons = document.querySelectorAll(".option");
const sections = document.querySelectorAll(".typeProjects_style");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    sections.forEach((section) => section.classList.add("d-none"));

    const targetClass = button.getAttribute("data-target");
    const targetSection = document.querySelector(`.${targetClass}`);
    targetSection.classList.remove("d-none");
  });
});