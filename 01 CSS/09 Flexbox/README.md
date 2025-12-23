# Flexbox CSS

Flexbox (Flexible Box Layout) es un modelo de diseño unidimensional (fila o columna) que facilita la alineación y distribución del espacio entre los ítems de un contenedor.

## Conceptos Clave

1.  **Flex Container:** El padre que tiene `display: flex;`.
2.  **Flex Items:** Los hijos directos del contenedor.

## Propiedades del Contenedor (Padre)

-   **flex-direction:** Define el eje principal (`row` [defecto], `column`, `row-reverse`, `column-reverse`).
-   **flex-wrap:** Define si los ítems deben saltar de línea si no caben (`nowrap` [defecto], `wrap`).
-   **justify-content:** Alineación en el **eje principal** (horizontal por defecto).
    -   `flex-start`, `flex-end`, `center`, `space-between` (muy usado), `space-around`, `space-evenly`.
-   **align-items:** Alineación en el **eje cruzado** (vertical por defecto).
    -   `stretch` (estira para llenar alto), `flex-start`, `flex-end`, `center`, `baseline`.

## Propiedades de los Ítems (Hijos)
-   **flex-grow:** Cuánto puede crecer el ítem para ocupar espacio libre.
-   **align-self:** Sobrescribe el `align-items` para un solo ítem.

## Ejemplo
En `index.html` verás ejemplos de alineación, dirección y salto de línea (wrap).
