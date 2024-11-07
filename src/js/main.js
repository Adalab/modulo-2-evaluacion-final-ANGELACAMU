'use strict';
const buttonSearch = document.querySelector(".js-button-search");
const inputSearch = document.querySelector(".js-input");

const sectionSearch = document.querySelector(".js-section");

function handleClick (ev){
    ev.preventDefault();
console.log ("ha hecho click");
}

buttonSearch.addEventListener("click", handleClick);
