# Display y Position en CSS

Dos de las propiedades más importantes para la maquetación (antes de Flexbox y Grid).

## Display
Controla cómo se comporta un elemento en el flujo del documento.
-   **block:** Ocupa todo el ancho disponible. Comienza en una nueva línea (ej. `<div>`, `<p>`).
-   **inline:** Solo ocupa el ancho necesario. No acepta width/height/margin-top-bottom (ej. `<span>`, `<a>`).
-   **inline-block:** Se comporta como `inline` (se pone al lado de otros) pero permite modificar width/height/margin/padding como un `block`.
-   **none:** El elemento desaparece por completo (no ocupa espacio).

## Position
Controla la ubicación exacta de un elemento.
-   **static (Default):** Flujo normal. `top`, `bottom`, `left`, `right` no tienen efecto.
-   **relative:** Se posiciona relativo a su ubicación original. El espacio original se conserva.
-   **absolute:** Se posiciona relativo al **ancestro posicionado** más cercano (uno que no sea static). Si no hay, es relativo al `body`. Sale del flujo normal (no ocupa espacio).
-   **fixed:** Se posiciona relativo al **viewport** (ventana del navegador). Se queda fijo al hacer scroll.
-   **sticky:** Una mezcla entre relative y fixed. Se comporta normal hasta que se hace scroll a un punto definido (ej. `top: 0`), donde se vuelve "pegajoso".

## Ejemplo
Abre `index.html` para ver en acción el posicionamiento absoluto dentro de un contenedor relativo y el efecto sticky/fixed al hacer scroll.
