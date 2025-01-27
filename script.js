"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const iconMenuClose = document.querySelector(".icon-close-container");
const menuList = document.querySelector(".menu-list");

const arrowUpFeatures = document.querySelector(".features-arrow-up");
const arrowDownFeatures = document.querySelector(".features-arrow-down");
const featureList = document.querySelector(".feature-list");
const companyArrowUp = document.querySelector(".company-arrow-up");
const companyArrowDown = document.querySelector(".company-arrow-down");
const companyList = document.querySelector(".company-list");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.style.display = "none";
  iconMenuClose.style.display = "block";
  menuList.style.opacity = 1;
  menuList.style.display = "block";
});

iconMenuClose.addEventListener("click", function () {
  iconMenuClose.style.display = "none";
  menuList.style.opacity = 0;
  menuList.style.display = "none";
  hamburgerMenu.style.display = "block";
});

//toggling code

arrowDownFeatures.addEventListener("click", function () {
  featureList.style.display = "block";
  arrowDownFeatures.style.display = "none";
  arrowUpFeatures.style.display = "inline";
});

arrowUpFeatures.addEventListener("click", function () {
  featureList.style.display = "none";
  arrowDownFeatures.style.display = "inline";
  arrowUpFeatures.style.display = "none";
});

companyArrowDown.addEventListener("click", function () {
  companyList.style.display = "block";
  companyArrowDown.style.display = "none";
  companyArrowUp.style.display = "inline";
});

companyArrowUp.addEventListener("click", function () {
  companyList.style.display = "none";
  companyArrowDown.style.display = "inline";
  companyArrowUp.style.display = "none";
});

console.log(arrowUpFeatures, arrowDownFeatures, featureList);

arrowDownFeatures.addEventListener("click", () => {
  console.log("Features arrow down clicked");
});
