//SUBMIT PARA LOS FORMULARIOS (pagina de contacto)

//Creamos las variables para el formulario de CONTACTO
    const formularioContacto = document.getElementById("formulario-contacto");
    const mensajeConfirmacionContacto = document.getElementById("mensaje-confirmacion-contacto")

    //Creamos la función para el formulario de CONTACTO

    formularioContacto.addEventListener("submit", function (evento) {
        evento.preventDefault();

        //Mensaje que saldrá al rellenar el formulario correctamente
        mensajeConfirmacionContacto.textContent = "Formulario rellenado correctamente";
        //Para que se quede el mensaje
        mensajeConfirmacionContacto.display = "block";

        //Una vez se rellena, el formulario se resetea
        formularioContacto.reset();

    });

    const formularioProponer = document.getElementById("formulario-proponer");
    const mensajeProponer = document.getElementById("mensaje-confirmacion-proponer");

    //Creamos la función para el formulario de PROPONER

    formularioProponer.addEventListener("submit", function (evento) {
        evento.preventDefault();

        mensajeProponer.textContent = "Formulario rellenado correctamente";
        mensajeProponer.display = "block";

        formularioProponer.reset();
    })