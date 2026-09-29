//CARRUSEL (pagina inicio)
//variable que irá cambiando, empieza en 0
let indice = 0;

//Creamos las variables de las flechas y las imágenes que irán pasando las películas
const flechaIzq = document.querySelector("#retroceder");
const flechaDer = document.querySelector("#avanzar");
const imagenes = document.querySelector("#gridPeliculas").getElementsByTagName("img");

//Función que mostrará las imágenes 
function mostrar() {
    //For para ir recorriendo todas las imágenes que haya, con un 'let' para la variable que va cambiando
    for (let i = 0; i < imagenes.length; i++) {
        //Si la i es mayor o igual que la variable indice y menor que el indicie + las peliculas que hay visibles las imágenes se quedan visibles
        if (i >= indice && i < indice + peliculasVisibles()) {
            imagenes[i].style.display = 'block';
        } else {
            //Las que no están visibles, no aparecen en el carrusel
            imagenes[i].style.display = 'none';
        }
    }
}

//Función para que enseñe 5 imágenes en pantalla de PC y 2 en móvil

function peliculasVisibles() {
    //Si la ventana es igual que el tamaño máximo de la pantalla (pongo el del movil para poner que ahí aparezcan solo 2) entonces el carrusel pasa a mostrar dos imágenes en vez de 5
    if (window.matchMedia("(max-width: 425px)").matches) {
        return 2;
    } else {
        //Sino, muestra 5 imágenes en el carrusel, tanto en PC como en tablet
        return 5;
    }
}

//Función para la flecha derecha al clickarla

flechaDer.onclick = function () {
    //Si el índice más las peliculas visibles que haya es menor que el tamaño total de las imagenes entonces le sumamos 1 al índice
    if (indice + peliculasVisibles() < imagenes.length) {
        indice = indice + 1;
    } else {
        indice = 0; // si está al final, vuelve al principio
    }

    mostrar();
};

//Función para la flecha izquierda al clickarla

flechaIzq.onclick = function () {
    //Si el índice es mayor que 0, le restamos 1 al índice
    if (indice > 0) {
        indice = indice - 1;
    } else {
        indice = imagenes.length - peliculasVisibles(); // si está al principio, va al final
    }
    mostrar();
};


mostrar();

//Funcion MOUSEOVER en la pagina de inicio

//Constante para seleccionar todas las tarjetas de una
const tarjetas = document.querySelectorAll(".peliculas-ordenes");

//ForEach para recorrer todas las tarjetas y aplicar el mouserover
tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener("mouseover", function () {
        //Cuando se pase el ratón por encima, la tarjeta se ampliará
        tarjeta.style.transform = "scale(1.03)";
        //El tiempo que tarda en aplicar dicha transformación
        tarjeta.style.transition = "transform 0.2s ease";
    });

    //Función mouseout para que la tarjeta vuelva a su tamaño normal al quitar el ratón de encima
    tarjeta.addEventListener("mouseout", function () {
        tarjeta.style.transform = "scale(1)";
    });
});