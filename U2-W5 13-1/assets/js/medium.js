const lettera = document.querySelectorAll("svg g[stroke-linecap='butt']");
console.log(lettera);
const intervallo = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * lettera.length);
  const ranLett = lettera[randomNumber];
  ranLett.getElementsByClassName.transition = "1.2s";
  if (ranLett.getAttribute("opacity") == 1) {
    ranLett.setAttribute("opacity", "0");
  } else {
    ranLett.setAttribute("opacity", "1");
  }
}, 40);

const fermati = () => {
  clearInterval(intervallo);
};

const nav = document.querySelector("nav");
console.log(nav);
const li = document.querySelector(".lista-ultima");
console.log(li);

const header = document.querySelector("header").offsetHeight;
console.log(header);

window.onscroll = function () {
  if (window.scrollY > header) {
    nav.classList.add("bianca");
    li.classList.add("lista-verde");
  } else {
    nav.classList.remove("bianca");
    li.classList.remove("lista-verde");
  }
};
