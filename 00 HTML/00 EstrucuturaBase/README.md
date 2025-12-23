# Estructura Base HTML

Este directorio contiene un ejemplo básico de la estructura de un documento HTML5. A continuación se detallan las etiquetas utilizadas en el archivo `index.html`:

## Etiquetas Principales

*   **`<!DOCTYPE html>`**: Define el tipo de documento y la versión de HTML (HTML5 en este caso).
*   **`<html>`**: Es la etiqueta raíz del documento HTML. El atributo `lang="en"` especifica que el idioma principal del contenido es inglés.
*   **`<head>`**: Contiene metadatos e información sobre el documento que no se muestra directamente en el navegador.
*   **`<body>`**: Contiene todo el contenido visible de la página web.

## Etiquetas en `<head>`

*   **`<meta charset="UTF-8">`**: Especifica la codificación de caracteres del documento (UTF-8), permitiendo el uso de caracteres especiales como ñ y tildes.
*   **`<meta name="viewport">`**: Configura la ventana gráfica (viewport) para asegurar que la página se vea bien en dispositivos móviles (diseño responsive).
*   **`<title>`**: Define el título de la página que aparece en la pestaña del navegador.
*   **`<meta name="author">`**: Indica el autor del documento.
*   **`<meta name="description">`**: Proporciona una breve descripción del contenido de la página, útil para buscadores.
*   **`<meta name="keywords">`**: Define palabras clave relacionadas con el contenido, utilizadas por motores de búsqueda.
*   **`<link rel="stylesheet">`**: Vincula una hoja de estilos CSS externa (`styles/style.css`) al documento HTML.
*   **`<link rel="shortcut icon">`**: Define el icono (favicon) que se muestra en la pestaña del navegador junto al título.

## Etiquetas Semánticas en `<body>`

Estas etiquetas ayudan a estructurar el contenido de manera lógica y accesible:

*   **`<header>`**: Representa el encabezado de la página o de una sección, usualmente contiene logotipos o títulos de navegación.
*   **`<nav>`**: Define una sección de navegación, destinada a contener enlaces a otras partes del documento o del sitio web.
*   **`<section>`**: Define una sección genérica del documento, utilizada para agrupar contenido temáticamente.
*   **`<article>`**: Representa una composición independiente en el documento, como una noticia, un post de blog o un comentario, que tiene sentido por sí misma.
*   **`<footer>`**: Representa el pie de página del documento o de una sección, generalmente contiene información de copyright, enlaces de contacto, etc.

## Scripts

*   **`<script>`**: Se utiliza para incrustar o hacer referencia a un script ejecutable, en este caso, un archivo JavaScript externo (`index.js`).

## [Volver al menu principal](../README.md)