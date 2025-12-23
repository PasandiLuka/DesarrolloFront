/* Manipulación del DOM (Document Object Model) */

// 1. Selección de Elementos
// getElementById
const p1 = document.getElementById("parrafo1");

// querySelector (Selecciona el primero que encuentra, usa selectores CSS)
const caja = document.querySelector(".caja");

// 2. Modificar Contenido
function cambiarTexto() {
    p1.textContent = "¡Texto cambiado desde JavaScript!";
    // p1.innerHTML = "<b>Texto en negrita</b>"; // Si quisieramos inyectar HTML
}

// 3. Event Listeners (La forma moderna de manejar eventos)
const btnColor = document.getElementById("btnColor");

btnColor.addEventListener("click", function () {
    // 4. Modificar Estilos y Clases
    // caja.style.backgroundColor = "gold"; // Estilo en línea
    caja.classList.toggle("borde-rojo"); // Agregar/Quitar clase CSS
});


// 5. Crear y Agregar Elementos
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

btnAgregar.addEventListener("click", () => {
    // Crear el elemento
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Nuevo Item " + (lista.children.length + 1);

    // Agregarlo al padre
    lista.appendChild(nuevoLi);
});


// 6. Leer Inputs
const inputNombre = document.getElementById("inputNombre");
const btnSaludar = document.getElementById("btnSaludar");
const mensajeSaludo = document.getElementById("mensajeSaludo");

btnSaludar.addEventListener("click", () => {
    const valor = inputNombre.value; // Obtener lo que escribió el usuario
    if (valor.trim() !== "") {
        mensajeSaludo.textContent = "Hola, " + valor + "!";
    } else {
        mensajeSaludo.textContent = "Por favor, escribe un nombre.";
    }
});
