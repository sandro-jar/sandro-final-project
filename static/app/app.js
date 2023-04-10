const nav = document.querySelector(".market-nav");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const navCollection = document.querySelector(".nav-collection");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 20) {
    navCollection.classList.add("sticky");
  } else {
    navCollection.classList.remove("sticky");
  }
});

const forms = document.querySelector(".forms");
pwShowHide = document.querySelectorAll(".eye-icon");
links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    console.log(pwFields);

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        return;
      }
      password.type = "password";
    });
  });
});

const navbar = document.querySelector(".market-nav");
const burgerIcon = document.querySelector(".burger-img");
const navLinksUl = document.querySelector(".links");
burgerIcon.addEventListener("click", () => {
  navLinksUl.classList.toggle("show");
});

const navcol = document.querySelector(".nav-collection");
const burgerI = document.querySelector(".burger-img");
const navLink = document.querySelector(".links-1");
burgerI.addEventListener("click", () => {
  navLink.classList.toggle("show-more");
});

const collection = document.querySelector(".card-wrapper");
const modalA = document.querySelector(".card-hover");
const modalContent = document.querySelector(".modal-content");
modalA.addEventListener("click", () => {
  modalContent.classList.toggle("mshow");
});

const offSpan = document.querySelector("#off-span");
offSpan.addEventListener("click", () => {
  modalContent.classList.toggle("mshow");
});

var box = document.querySelector(".box-wrapper");
var buttonA = document.getElementById("open-box-hover");
var boxContent = document.querySelector(".unboxing-cards-wrapper");
buttonA.addEventListener("click", () => {
  boxContent.classList.toggle("boxm");
});
