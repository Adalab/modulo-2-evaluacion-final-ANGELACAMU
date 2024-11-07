'use strict';

/* Pintar las series que me da el servidor
Seleccionar los elementos del HTML: lista
Cuando la usuaria hace click en el boton buscar:
  Recoger el valor del input
  -hacer la peticion al servidor
    - acceder/guardar los datos que necesita
    - pintar los datos en el html
*/

const buttonSearch = document.querySelector(".js-button-search");
const inputSearch = document.querySelector(".js-input");

const sectionSearch = document.querySelector(".js-section");

function handleClick(ev) {
    ev.preventDefault();
    console.log("ha hecho click");
    const inputText = inputSearch.value;
    console.log(inputText);
    fetch(`https://api.jikan.moe/v4/anime?q=${inputText}`)
        .then(res => res.json())
        .then(info => {
            const series = info.data;
            console.log(series);
            for (const serie of series) {
                sectionSearch.innerHTML = `
                <section class="sectionSearch">
                    <h5>${series}</h5>
                </section>
            `
            }

        })

}





buttonSearch.addEventListener("click", handleClick);
