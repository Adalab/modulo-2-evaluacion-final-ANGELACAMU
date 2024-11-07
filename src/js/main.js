'use strict';

/* 2.BÚSQUEDA
Pintar las series que me da el servidor
Seleccionar los elementos del HTML: lista
Cuando la usuaria hace click en el boton buscar:
  Recoger el valor del input
  -hacer la peticion al servidor
    - acceder/guardar los datos que necesita
    - pintar los datos en el html

   3.FAVORITOS
Cuando la usuaria haga click sobre la serie en concreto:
  - averiguar que serie ha seleccionado la usuaria
  - almacenar la informacion de la serie favorita
  - intercambiar el color de fondo y el de fuente
  - mostrar un listado en la parte izquierda de la pantalla, debajo del         formulario de búsqueda, con las series favoritas
  

  4.ALMACENAMIENTO
  almacenar el listado de favoritos en el localStorage

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
            sectionSearch.innerHTML = "";
            for (const serie of series) {
                sectionSearch.innerHTML += `
                <section class="sectionSearch">
                    <h5>${serie.title}</h5>
                    <img src="${serie.images.jpg.image_url}" alt="imagen-anime">
                </section>
            `

            }


        })

}





buttonSearch.addEventListener("click", handleClick);
