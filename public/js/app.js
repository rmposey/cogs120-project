'use strict'

// hamburger menu button
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu')
const menuBackground = document.querySelector('.menu-background')

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menu.classList.add('open');
    menuBackground.classList.add('open');

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menu.classList.remove('open');
    menuBackground.classList.remove('open');
  }
});
