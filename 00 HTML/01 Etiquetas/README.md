# Etiquetas de Texto y Formato

Este directorio explora diversas etiquetas HTML utilizadas para dar formato al texto, estructurar contenido y crear enlaces. A continuación se detallan las etiquetas encontradas en `index.html`:

## Párrafos y Formato de Texto

*   **`<p>`**: Define un párrafo de texto. Es un elemento de bloque.
*   **`<b>`**: Muestra el texto en **negrita**. Es un elemento en línea, utilizado para resaltar texto visualmente sin aportar importancia semántica extra.
*   **`<i>`**: Muestra el texto en *cursiva*. Es un elemento en línea, utilizado para resaltar texto visualmente (como términos técnicos o idiomas extranjeros) sin importancia semántica fuerte.
*   **`<strong>`**: Indica que el texto tiene una importancia fuerte. Los navegadores lo muestran en negrita, y es relevante para motores de búsqueda y lectores de pantalla.
*   **`<em>`**: (Escrito como `<en>` en el código, posiblemente un error tipográfico por `<em>`). Indica énfasis en el texto. Los navegadores lo muestran en cursiva.

## Saltos y Separadores

*   **`<br>`**: Inserta un salto de línea simple.
*   **`<hr>`**: Crea un cambio temático en el contenido, usualmente visualizado como una línea horizontal divisoria.

## Encabezados

*   **`<h1>` a `<h6>`**: Definen encabezados HTML. `<h1>` es el más importante y `<h6>` el menos importante.

## Texto Preformateado y Citas

*   **`<pre>`**: Define texto preformateado. Preserva los espacios en blanco y los saltos de línea tal como están escritos en el código HTML.
*   **`<blockquote>`**: Define una sección que se cita de otra fuente, generalmente con sangría.
*   **`<q>`**: Define una cita corta en línea. Los navegadores suelen agregar comillas automáticamente. Acepta atributos como `cite` (URL de la fuente) y `lang`.

## Exponentes y Abreviaturas

*   **`<sup>`**: Define texto superíndice (exponente), que se muestra con una altura media posición por encima y a menudo más pequeño que el texto normal (ej. H^2).
*   **`<abbr>`**: Define una abreviatura o acrónimo. El atributo `title` proporciona la expansión o definición completa.
*   **`<acronym>`**: (Obsoleto en HTML5, usar `<abbr>`). Se usaba para definir acrónimos.

## Enlaces (`<a>`)

La etiqueta `<a>` define un hipervínculo. Se utiliza para enlazar a otras páginas, archivos, direcciones de correo, etc.

*   **Atributo `href`**: Especifica el destino del enlace.
*   **Atributo `target`**:
    *   `_blank`: Abre el enlace en una nueva pestaña o ventana.
    *   `_self`: Abre el enlace en la misma pestaña (comportamiento por defecto).
*   **Enlaces especiales**:
    *   `mailto:`: Abre el cliente de correo electrónico predeterminado del usuario.
    *   `tel:`: Inicia una llamada telefónica (en dispositivos compatibles).

## [Volver al menu principal](../README.md)