# Tablas

Este directorio contiene ejemplos de cómo crear y estructurar tablas en HTML para organizar datos en filas y columnas.

## Estructura de Tabla (`<table>`)

La etiqueta `<table>` define el contenedor principal de la tabla.

*   **`<tr>`**: (Table Row) Define una fila dentro de la tabla.
*   **`<td>`**: (Table Data) Define una celda estándar dentro de una fila. Contiene los datos.
*   **`<th>`**: (Table Header) Define una celda de encabezado. El texto suele mostrarse en negrita y centrado por defecto.

## Agrupación de Columnas (`<colgroup>`)

La etiqueta `<colgroup>` se utiliza para especificar un grupo de una o más columnas en una tabla para aplicar formato.
*   **`<col>`**: Define atributos para una o más columnas dentro de un elemento `<colgroup>`. Permite aplicar estilos (como color de fondo) a columnas enteras sin repetir estilos en cada celda.

## Estilos CSS en el Ejemplo

El archivo incluye estilos CSS internos (`<style>`) para mejorar la visualización de la tabla:
*   `border-collapse: collapse;`: Elimina el espacio entre los bordes de las celdas.
*   `border`: Añade bordes visibles a la tabla y celdas.
*   `padding`: Añade espacio interior en las celdas.

## [Volver al menu principal](../README.md)