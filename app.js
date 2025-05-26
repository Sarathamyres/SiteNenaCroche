document.addEventListener("DOMContentLoaded", function () {
  new Glide(".carrossel", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    autoplay: 2000,
    hoverpause: false,
    rewind: true,
    animationDuration: 800,
    gap: 0,
    breakpoints: {
      768: { perView: 2 },
      500: { perView: 1 },
    },
  }).mount();
});
const hamburguer = document.querySelector(".hamburger");
const menuHamburguer = document.querySelector(".menu-hamburguer");

function toggleMenu() {
  const isActive = hamburguer.classList.contains("is-active");
  menuHamburguer.style.display = isActive ? "block" : "none";
}
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("is-active");
  toggleMenu();
});

const informationSite = document.querySelector(".information-site h3");
const inforsContainer = document.querySelector(".infors");
const inforsCompra = document.querySelector(".infors-compra");
const buttonHelp = document.querySelectorAll(".buttonHelp");

informationSite.addEventListener("click", () => {
  inforsContainer.style.display = "block";
});
buttonHelp.forEach((button) => {
  button.addEventListener("click", () => {
    inforsCompra.style.display = "block";
    hamburguer.classList.remove("is-active");
    toggleMenu();
  });
});

function popupButton() {
  inforsContainer.style.display = "none";
  inforsCompra.style.display = "none";
}

window.addEventListener("scroll", () => {
  const iconFixed = document.querySelector(".icons-fixed");
  if (window.scrollY <= 2) {
    iconFixed.style.display = "none";
  } else {
    iconFixed.style.display = "flex";
  }
  if (window.scrollY > 0 && hamburguer.classList.contains("is-active")) {
    hamburguer.classList.remove("is-active");
    toggleMenu();
  }
});

const radioS = document.querySelectorAll(".nav-produtos input");
const produtos = document.querySelectorAll(".produtos-container .produtos");

radioS.forEach((radio) => {
  radio.addEventListener("change", function () {
    const valueCheck = this.value;
    produtos.forEach((produto) => {
      const valueProd = produto.dataset.categoria;

      if (valueCheck === valueProd) {
        produto.style.display = "flex";
      } else {
        produto.style.display = "none";
      }
    });
  });
});
document
  .querySelector(".nav-produtos input:checked")
  ?.dispatchEvent(new Event("change"));

ScrollReveal().reveal(".hero-container", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
ScrollReveal().reveal(".card", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
ScrollReveal().reveal(".img-main", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
ScrollReveal().reveal(".button-cta", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
ScrollReveal().reveal(".carrossel", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
ScrollReveal().reveal(".profile", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
ScrollReveal().reveal(".about-me button", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
ScrollReveal().reveal(".tops", {
  origin: "left",
  duration: 3000,
  distance: "20%",
});
