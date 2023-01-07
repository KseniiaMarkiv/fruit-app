'use strict';
let menuToggle = document.querySelector('.toggle');
let menuNavigation = document.querySelector('.navigation');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    menuNavigation.classList.toggle('active');

}

// change image on click selected thumbals
function imgSlider(anything) {
    document.querySelector('.fruits').src = anything;
}
// change bg color 
function changeBgColor(color) {
    const bg = document.querySelector('.bg');
    bg.style.backgroundColor = color;
}
// add active class in selected thumbals
let element = document.querySelectorAll('.thumb li');

for (let i = 0; i < element.length; i++) {
    element[i].onclick = function() {
        var c = 0;
        while (c < element.length) {
            element[c++].className = 'check';
        }
        element[i].className = 'check active';
    }
}