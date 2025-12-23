# CSS Grid Layout

Grid es un sistema de diseño bidimensional (filas y columnas) muy potente para crear layouts complejos.

## Conceptos Clave

-   **display: grid;** Define el contenedor como una rejilla.
-   **grid-template-columns:** Define cuántas columnas hay y su ancho.
    -   `auto`: Tamaño automático.
    -   `px`: Tamaño fijo.
    -   `fr`: Unidad de fracción (espacio disponible). `1fr` toma una parte del espacio libre.
-   **gap:** Define el espacio entre filas y columnas.
-   **grid-template-areas:** Permite dibujar el layout usando nombres asignados a los hijos mediante `grid-area`.

## Diferencia con Flexbox
-   **Flexbox** es unidimensional (una fila O una columna a la vez). Ideal para componentes pequeños o alineaciones simples.
-   **Grid** es bidimensional (filas Y columnas a la vez). Ideal para el layout general de la página.

## Ejemplo
En `index.html` verás un ejemplo básico de columnas, el uso de fracciones `fr` y un layout completo con header, sidebar, main y footer usando `grid-areas`.
