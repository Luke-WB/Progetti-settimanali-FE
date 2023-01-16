const m = document.querySelectorAll("svg g[stroke-linecap='butt']");
const intervallo = setInterval(() => {
  const randomNumber = Math.floor(Math.random() * m.length);
  const ranM = m[randomNumber];
  ranM.getElementsByClassName.transition = "1s";
  if (ranM.getAttribute("opacity") == 1) {
    ranM.setAttribute("opacity", "0");
  } else {
    ranM.setAttribute("opacity", "1");
  }
}, 40);

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
