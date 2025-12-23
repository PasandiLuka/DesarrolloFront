# Modelo de Caja (Box Model)

Cada elemento en HTML es esencialmente una caja rectangular. El modelo de caja de CSS describe las cajas rectangulares generadas para los elementos del árbol del documento y consta de:

1.  **Content (Contenido):** El área donde aparece el texto o las imágenes.
2.  **Padding (Relleno):** Área transparente alrededor del contenido. Aleja el contenido del borde.
3.  **Border (Borde):** Una línea que va alrededor del padding y del contenido.
4.  **Margin (Margen):** Área transparente fuera del borde. Separa el elemento de otros elementos vecinos.

## Box Sizing
Una propiedad crucial es `box-sizing`.
-   `content-box` (por defecto): El ancho y alto solo incluyen el contenido. Si agregas padding o borde, la caja crece.
    -   Ancho Total = width + padding-left + padding-right + border-left + border-right
-   `border-box`: El ancho y alto incluyen el contenido, padding y borde. Es mucho más fácil de manejar para maquetación.

## Ejemplo
En `index.html` y `styles/style.css` se visualizan estas capas y la diferencia entre content-box y border-box.
