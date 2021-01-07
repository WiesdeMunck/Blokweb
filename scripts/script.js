// JavaScript Document
var hamburgerButton = document.querySelector('.menuButton');
var menuHeight = document.querySelector('.menuList');
var toggleCounter = 0;

function toggleMenu() {
    if (toggleCounter == 0) {
        menuHeight.style.display = "flex";
        toggleCounter++;
    } else {
        menuHeight.style.display = "none";
        toggleCounter--;
    }
}

hamburgerButton.onclick = toggleMenu;