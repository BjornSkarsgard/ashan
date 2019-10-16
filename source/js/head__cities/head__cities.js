'use strict';

const citiesBlock = document.getElementById('cities');
const citiesInner = document.querySelectorAll('.head-nav__inner');
const navItems = document.querySelectorAll('.head-nav__items');
const headNav = document.querySelector('.head-nav__inner');
var headNavActive = 'head-nav__inner--active';


const changeCity = function(listener, innerContent, items, i, changeClass, selector) {
    listener.addEventListener('click', evt => {
        if (items[i].style.display === "") {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "";
        }
        const listItemElement = evt.target.closest('li');
        changeClass.classList.toggle(selector);
        innerContent[i].textContent = listItemElement.textContent;
    })
}

changeCity(citiesBlock, citiesInner, navItems, 0, headNav, headNavActive);