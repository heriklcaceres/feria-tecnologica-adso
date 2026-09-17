"use strict";

// 1. Abrir y cerrar el menú en pantallas pequeñas.
const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector("#menu-principal");

botonMenu.addEventListener("click", function () {
    const estaAbierto = menu.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", String(estaAbierto));
});

// 2. Mostrar un mensaje cuando se selecciona el botón de bienvenida.
const botonMensaje = document.querySelector("#boton-mensaje");
const mensaje = document.querySelector("#mensaje-bienvenida");

botonMensaje.addEventListener("click", function () {
    mensaje.textContent = "¡Bienvenidos! Cada cambio pequeño puede convertirse en una nueva versión del proyecto.";
});

// 3. Filtrar las tarjetas según la categoría seleccionada.
const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll(".tarjeta");
const resultado = document.querySelector("#resultado-filtro");

botonesFiltro.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const categoriaSeleccionada = boton.dataset.filtro;
        let cantidadVisible = 0;

        botonesFiltro.forEach(function (elemento) {
            elemento.classList.remove("activo");
        });

        boton.classList.add("activo");

        tarjetas.forEach(function (tarjeta) {
            const mostrar = categoriaSeleccionada === "todas" ||
                tarjeta.dataset.categoria === categoriaSeleccionada;

            tarjeta.hidden = !mostrar;

            if (mostrar) {
                cantidadVisible++;
            }
        });

        resultado.textContent = "Se muestran " + cantidadVisible + " actividades.";
    });
});

// 4. Escribir automáticamente el año actual en el pie de página.
const anio = document.querySelector("#anio");
anio.textContent = new Date().getFullYear();
