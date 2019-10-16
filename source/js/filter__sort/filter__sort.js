'use strict';

const itemsList = document.querySelectorAll('.filter__items-page');
const innerBlock = document.querySelectorAll('.filter__product-inner');


//присваиваю каждому блоку с сортировкой уникальную переменную
const productOnPage = itemsList[0];
const sortOnPage = itemsList[1];
const sortOnPageFooter = itemsList[2];
//присваиваю каждому блоку с выводом текста уникальную переменную
const productOnPageInner = innerBlock[0];
const sortOnPageInner = innerBlock[1];
const sortOnPageFooterInner = innerBlock[2];
//присваиваю каждому блоку откуда надо брать текст уникальную переменную


const inner = function(listener, innerContent) {
    listener.addEventListener('click', evt => {
        const listItemElement = evt.target.closest('li');
        innerContent.textContent = listItemElement.textContent;
    })
}

inner(productOnPage, productOnPageInner);
inner(sortOnPage, sortOnPageInner);
inner(sortOnPageFooter, sortOnPageFooterInner);