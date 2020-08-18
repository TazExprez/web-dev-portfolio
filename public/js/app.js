// var menuBtn = document.getElementsByClassName("menu-btn");

// var mobileMenu = document.getElementsByClassName("mobile-menu");

// var clickedBtn = function () {
//   mobileMenu[0].classList.toggle("active");
// };

// menuBtn[0].addEventListener("click", clickedBtn);

var homeBtn = document.getElementsByClassName("ti-home");
var aboutBtn = document.getElementsByClassName("ti-crown");

var viewAboutPage = document.getElementsByClassName("container-site");

var clickedHomeBtn = function () {
  viewAboutPage[0].classList.remove("active");
};

var clickedAboutBtn = function () {
  viewAboutPage[0].classList.add("active");
};

homeBtn[0].addEventListener("click", clickedHomeBtn);
aboutBtn[0].addEventListener("click", clickedAboutBtn);
