const dataCart = [
  {
    img: "../image/card1.jpg",
    name: "Artistic Wood Hanger",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Classic Circular Table",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Classic Colorful Chair",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Classic Wood Chair",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Decorative Fabric Sofa",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Minimalist Corner Desk",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Minimalist Corner Desk",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Rattan Triple Seat Sofa",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Woven Dinning Chair",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Woven Single Seat Sofa",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Classic Colorful Chair",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
  {
    img: "../image/card1.jpg",
    name: "Woven Square Chair",
    rate: "⭐⭐⭐⭐⭐",
    price: "$120.00",
  },
];

const containerCards = document.querySelector(".containerCards");

const cards = dataCart.map((card) => {
  return `
    <div class="Card">
      <img src="${card.img}" alt="" />
      <div>
        <a>${card.name}</a>
        <p>${card.rate}</p>
        <p>${card.price}</p>
      </div>
      <button>ADD TO CART</button>
    </div>
  `;
});

containerCards.innerHTML = cards;

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
