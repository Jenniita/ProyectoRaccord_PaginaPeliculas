//BOTÓN DEL MENÚ (en las tres páginas)
const botonMenu = document.querySelector("#menu-icono");
const contenidoMenu = document.querySelector(".navegador")

//Añadimos el evento
botonMenu.addEventListener("click", () => {
    //Cuando suceda el evento, se le añadirá la clase mostrar que mostrará el menú
    contenidoMenu.classList.toggle("mostrar");
})









