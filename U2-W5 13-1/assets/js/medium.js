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
window.onscroll = function () {
  if (document.body.scrollTop >= 50) {
    nav.classList.add("bianca");
    console.log("okokok");
  } else {
    nav.classList.remove("bianca");
    console.log("okok");
  }
};
