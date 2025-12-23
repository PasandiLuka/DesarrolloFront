# Unidades de Medida en CSS

En CSS, las unidades de medida son fundamentales para definir tamaños, espacios y dimensiones de los elementos. Se dividen principalmente en dos categorías: **absolutas** y **relativas**.

## Unidades Absolutas
Las unidades absolutas tienen un tamaño fijo y no cambian en función de otros factores.
- **px (Píxeles):** Es la unidad más común. Un píxel corresponde a un punto en la pantalla. Es preciso pero no siempre escalable.

## Unidades Relativas
Las unidades relativas son flexibles y se adaptan según el contexto, lo que las hace ideales para diseño responsivo.
- **% (Porcentaje):** Relativo al elemento padre. Si el padre mide 500px y el hijo tiene `width: 50%`, medirá 250px.
- **rem (Root EM):** Relativo al tamaño de fuente del elemento raíz (`<html>`). Por defecto, 1rem suele ser 16px. Es muy útil para accesibilidad y consistencia global.
- **em:** Relativo al tamaño de fuente del elemento **padre directo** o del propio elemento. Puede causar efectos en cascada difíciles de controlar si se anida mucho.
- **vw (Viewport Width):** 1vw equivale al 1% del ancho visible de la ventana del navegador.
- **vh (Viewport Height):** 1vh equivale al 1% de la altura visible de la ventana del navegador.

## Ejemplo de uso
Ver el archivo `index.html` y `styles/style.css` para ejemplos prácticos de cada unidad.
