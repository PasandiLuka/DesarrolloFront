# Contenido Multimedia

Este directorio muestra cómo integrar y manipular elementos multimedia en una página web, como imágenes, videos, audio y gráficos vectoriales.

## Imágenes (`<img>`)

La etiqueta `<img>` se utiliza para incrustar imágenes.
*   **`src`**: Ruta de la imagen (local o URL externa).
*   **`alt`**: Texto alternativo que se muestra si la imagen no carga; esencial para accesibilidad.
*   **`width`** y **`height`**: Definen el ancho y alto de la imagen en píxeles (px).

Nota: Las imágenes pueden envolverse en una etiqueta `<a>` para funcionar como enlaces, abriendo el destino al hacer clic en ellas.

## Videos (`<video>`)

La etiqueta `<video>` permite reproducir videos en la web.
*   **`src`**: Ruta del archivo de video. Se puede usar directamente en la etiqueta `<video>` o dentro de elementos `<source>`.
*   **`controls`**: Muestra los controles de reproducción del navegador (play, pausa, volumen).
*   **`muted`**: Inicia el video silenciado. (Requisito habitual para `autoplay` en muchos navegadores).
*   **`autoplay`**: Inicia la reproducción automáticamente al cargar la página.
*   **`poster`**: Muestra una imagen de portada mientras el video carga o hasta que el usuario le da play.
*   **`<source>`**: Permite especificar múltiples formatos de video (ej. MP4, WebM) para asegurar compatibilidad. Se puede añadir un mensaje de texto de fallback para navegadores antiguos.

## Audio (`<audio>`)

La etiqueta `<audio>` se usa para reproducir sonido.
*   Funciona de manera similar a `<video>`, aceptando atributos como **`controls`**, **`muted`**, **`autoplay`** y la etiqueta interna **`<source>`**.
*   También permite texto de fallback para navegadores no compatibles.

## Gráficos Vectoriales (`<svg>`)

La etiqueta `<svg>` (Scalable Vector Graphics) define gráficos basados en vectores directamente en el HTML.
*   Permite dibujar formas geométricas como **`<path>`** (trazados complejos), **`<circle>`**, **`<rect>`**, etc.
*   Los gráficos SVG no pierden calidad al redimensionarse (`width`, `height`).
*   Utiliza atributos como `viewBox` para definir el área visible y coordenadas.

## [Volver al menu principal](../README.md)