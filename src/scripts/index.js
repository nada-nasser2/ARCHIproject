const sliderImages = document.querySelectorAll(".slider__image");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

let currentCounter = document.querySelector(".current_counter");
let totalCounter = document.querySelector(".total_counter");

let counter = 0;
currentCounter.textContent = counter + 1;
totalCounter.textContent = sliderImages.length;

const reset = function () {
  sliderImages.forEach((img) => {
    img.style.display = "none";
  });
};

const setNewActive = function () {
  currentCounter.textContent = counter + 1;
  sliderImages[counter].style.display = "block";
};

nextBtn.addEventListener("click", () => {
  counter++;
  reset();
  if (counter == sliderImages.length) {
    counter = 0;
  }
  setNewActive();
});

prevBtn.addEventListener("click", () => {
  counter--;
  reset();
  if (counter == -1) {
    counter = sliderImages.length - 1;
    // [ 0 , 1 , 2 ]
    //   1   2   3  => 3-1 = 2 el howa el 3onsor el a5er
  }
  setNewActive();
});

// const pagination = document.querySelectorAll(".pagination_item");

// const resetPagination = function () {
//   pagination.forEach((item) => {
//     item.style.display = "none";
//   });
// };

// const setNewActivePagination = function () {
//   pagination[counter].style.display = "block";
//   console.log(counter);
// };

// resetPagination();
// setNewActivePagination();

// nextBtn.addEventListener("click", () => {
//   counter++;
//   if (counter == pagination.length) {
//     counter = 0;
//   }
//   setNewActivePagination();
// });

// prevBtn.addEventListener("click", () => {
//   counter--;
//   if (counter < 0) {
//     counter = pagination.length - 1;
//   }
//   setNewActivePagination();
// });

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

const scrollBar = document.querySelector(".scroll_bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollBar.style.display = "flex";
  } else {
    scrollBar.style.display = "none";
  }
});


