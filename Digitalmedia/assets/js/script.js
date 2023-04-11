'use strict';
// add event on multiple elements
const addEventOnElement = function (elements,eventType,callback) {
    for (let index = 0; index < elements.length; index++) {
    elements[index].addEventListener(eventType,callback);
       
    }
    
}
// navbar toggle for mobile
const navbar =document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]")
const overlay = document.querySelector("[data-overlay]")
const toggleNavbar= function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("navbar-active")
}
addEventOnElement([navToggleBtn,overlay],"click",toggleNavbar)