'use strict';
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__links');
const header = document.querySelector('.header__container');
const openClose = function () {
  navMenu.classList.toggle('hamburger_menu');
};
const rotate = function () {
  hamburger.classList.toggle('rotate');
};
hamburger.addEventListener('click', openClose);
hamburger.addEventListener('click', rotate);
