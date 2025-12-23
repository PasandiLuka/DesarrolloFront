# Animaciones, Transiciones y Transformaciones

Dar vida a la web es posible mediante CSS sin necesidad de JavaScript para efectos visuales.

## Transiciones (transition)
Permite suavizar el cambio de una propiedad CSS a otra.
-   **Sintaxis:** `transition: propiedad duracion funcion-tiempo delay;`
-   Ejemplo: `transition: all 0.3s ease;`
-   Se suele activar con pseudo-clases como `:hover`.

## Transformaciones (transform)
Modifica el espacio coordenado del modelo de formato visual.
-   **scale(x, y):** Cambia el tamaño.
-   **rotate(angle):** Rota el elemento.
-   **translate(x, y):** Mueve el elemento.
-   **skew(x, y):** Sesga o inclina el elemento.

## Animaciones (@keyframes)
Permite crear animaciones complejas definiendo "fotogramas clave" (keyframes).
1.  Definir la animación con `@keyframes nombre-animacion { ... }`.
    -   Usar `from` y `to` o porcentajes (`0%`, `50%`, `100%`).
2.  Aplicar la animación al elemento con `animation`.
    -   Ejemplo: `animation: nombre 2s infinite;`

## Ejemplo
En `index.html` verás transiciones al pasar el mouse y una animación infinita automática.
