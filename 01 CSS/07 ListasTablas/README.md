# Listas y Tablas en CSS

## Listas
Podemos controlar el estilo de las viñetas en listas desordenadas (`<ul>`) y ordenadas (`<ol>`) usando `list-style-type`.
-   **Tipos comunes:** `disc`, `circle`, `square`, `decimal`, `upper-roman`, `lower-alpha`.
-   **list-style: none;** Se usa mucho en menús de navegación para quitar las viñetas por defecto.

## Tablas
Las tablas por defecto pueden verse anticuadas. CSS es vital para hacerlas legibles y atractivas.
-   **border-collapse: collapse;** Es, quizás, la propiedad más importante. Hace que los bordes de celdas adyacentes se fusionen en una sola línea, eliminando el espacio entre celdas típico de las tablas HTML antiguas.
-   **Pseudo-clases:** `:nth-child(even)` o `:nth-child(odd)` permiten crear un efecto de "cebra" (filas de colores alternados) para facilitar la lectura.
-   **Hover:** `:hover` en los `<tr>` ayuda a resaltar la fila que el usuario está viendo.

## Ejemplo
Revisar `index.html` y `styles/style.css` para ver implementaciones de listas personalizadas y una tabla con estilos modernos.
