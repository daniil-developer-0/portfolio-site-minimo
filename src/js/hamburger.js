"use strict";

const hamburger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

// === Events ===
hamburger.addEventListener("click", toggleNav);

// === Functions ===
function toggleNav(ev) {
  if (ev?.target) {
    console.log(ev);
    hamburger.classList.toggle("active");
    if (nav.style.display === "none" || nav.style.display === "") {
      nav.style.display = "flex";
      //   document.body.scroll = "no";
      nav.style.transform = "translateX(0)";
    } else {
      nav.style.display = "none";
      nav.style.transform = "translateX(100%)";
    }
  }
}
