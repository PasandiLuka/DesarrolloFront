# El DOM (Document Object Model)

El DOM es la representación estructurada del documento HTML que permite a JavaScript acceder y manipular los elementos de la página web (texto, estilos, atributos).

## Selección de Elementos
-   `document.getElementById("id")`: El más rápido para IDs únicos.
-   `document.querySelector(".clase")`: Selecciona el primer elemento que coincida con el selector CSS.
-   `document.querySelectorAll("p")`: Selecciona todos los elementos que coincidan.

## Manipulación
-   `element.textContent`: Cambia el texto interno.
-   `element.innerHTML`: Cambia el HTML interno (cuidado con XSS).
-   `element.style`: Cambia estilos en línea (ej. `element.style.color = 'red'`).
-   `element.classList`: Maneja clases CSS (`add`, `remove`, `toggle`). Useful para aplicar estilos definidos en CSS.

## Eventos
Los eventos son acciones que ocurren en el sistema (clics, teclas, carga, etc.).
-   `element.addEventListener("evento", funcion)`: La forma recomendada de escuchar eventos.

## Creación de Nodos
-   `document.createElement("tag")`: Crea un nuevo elemento en memoria.
-   `padre.appendChild(hijo)`: Inserta el elemento en el DOM.
