# Listas

Este directorio demuestra el uso de listas para organizar información de texto, ya sea de forma ordenada o desordenada.

## Listas Desordenadas (`<ul>`)

La etiqueta `<ul>` (Unordered List) define una lista donde el orden de los elementos no es importante.
*   **`<li>`**: (List Item) Define cada elemento de la lista. Por defecto, aparecen con viñetas (puntos).

## Listas Ordenadas (`<ol>`)

La etiqueta `<ol>` (Ordered List) define una lista donde el orden sí importa. Los elementos se numeran automáticamente.

### Atributos de `<ol>`

*   **`start`**: Especifica el valor de inicio de la secuencia de numeración (ej. `start="5"` comienza en 5).
*   **`type`**: Define el tipo de marcador de la lista:
    *   `1`: Números (pordefecto).
    *   `A`: Letras mayúsculas.
    *   `a`: Letras minúsculas.
    *   `I`: Números romanos mayúsculos.
    *   `i`: Números romanos minúsculos.
*   **`reversed`**: Invierte el orden de la numeración (ej. 5, 4, 3, 2, 1).

## Listas Anidadas

Es posible anidar listas dentro de otras listas colocando un elemento `<ul>` o `<ol>` dentro de un `<li>` de la lista padre. Esto permite crear subniveles jerárquicos.

## [Volver al menu principal](../README.md)