'use strict';

/* 2.BÚSQUEDA
Pintar las series que me da el servidor
Seleccionar los elementos del HTML: lista
Cuando la usuaria hace click en el boton buscar:
  Recoger el valor del input
  -hacer la peticion al servidor
    - acceder/guardar los datos que necesita
    - pintar los datos en el html

Si la imagen de la serie es fallida debemos cambiar el enlace de la serie

   3.FAVORITOS
Cuando la usuaria haga click sobre la serie en concreto:
  - averiguar que serie ha seleccionado la usuaria
  - por cada serie que seleccione almacenar la informacion de la serie favorita
  - intercambiar el color de fondo y el de fuente
  - mostrar un listado en la parte izquierda de la pantalla, debajo del         formulario de búsqueda, con las series favoritas pintadas
  

  4.ALMACENAMIENTO
  almacenar el listado de favoritos en el localStorage

*/

const buttonSearch = document.querySelector(".js-button-search");
const inputSearch = document.querySelector(".js-input");
const sectionSearch = document.querySelector(".js-section");
const sectionFavorites = document.querySelector(".js-section-favorites");

let seriesList = [];
let favoriteSeriesList = [];



function handleClick(ev) {
    ev.preventDefault();
    console.log("ha hecho click");
    const inputText = inputSearch.value;
    console.log(inputText);
    fetch(`https://api.jikan.moe/v4/anime?q=${inputText}`)
        .then(res => res.json())
        .then(info => {
            const series = info.data;
            seriesList = info.data;
            sectionSearch.innerHTML = "";
            for (const serie of series) {
                sectionSearch.innerHTML += `
                <div id=${serie.mal_id} class="sectionSearch js-series">
                    <h5>${serie.title}</h5>
                    <img src="${serie.images.jpg.image_url}" alt="imagen-anime">
                </div>
            `
                let imagePlaceHolder = "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png";
                if (imagePlaceHolder === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
                    imagePlaceHolder = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";  // Si es igual, cambia el valor
                }

                const allSeries = document.querySelectorAll(".js-series");
                for (const allSerie of allSeries) {
                    allSerie.addEventListener("click", handleAddFavorite);

                }

            }


        })

}


buttonSearch.addEventListener("click", handleClick);


//Series favoritas//
function handleAddFavorite(event) {
    console.log(seriesList);
    // console.log(event.currentTarget);
    const idSerieClicked = event.currentTarget.id;

    const serieSelected = seriesList.find((serie) => {
        console.log(serie.mal_id);
        console.log(idSerieClicked);
        return serie.mal_id === parseInt(idSerieClicked);
    })

    console.log(serieSelected);


    //añadir serie a favoritas//
    favoriteSeriesList.push(serieSelected);
    console.log(favoriteSeriesList);

    //pintar las series favoritas//
    sectionFavorites.innerHTML = "";
    for (const serie of favoriteSeriesList) {
        sectionFavorites.innerHTML += `
                <div id=${serie.mal_id} class="sectionSearch js-series">
                    <h5>${serie.title}</h5>
                    <img src="${serie.images.jpg.image_url}" alt="imagen-anime">
                </div>
            `

    }

}