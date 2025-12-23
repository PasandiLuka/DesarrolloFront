# IFrame (Marco Incorporado)

Este directorio muestra cómo utilizar la etiqueta `<iframe>` para incrustar contenido externo dentro de una página web actual.

## Uso Básico de `<iframe>`

La etiqueta `<iframe>` crea un marco flotante en línea que permite cargar otro documento HTML dentro de la visualización actual.

### Atributos Comunes

*   **`src`**: La URL de la página o recurso que se va a incrustar.
*   **`width`** y **`height`**: Definen el ancho y el alto del marco (en píxeles o porcentaje).
*   **`title`**: Proporciona un título descriptivo para el contenido del marco, importante para la accesibilidad.
*   **`frameborder`**: (Obsoleto en HTML5, se prefiere CSS). Define si el marco tiene borde (`1`) o no (`0`).
*   **`scrolling`**: Controla si se muestran barras de desplazamiento (`yes`, `no`, `auto`).

### Ejemplos en este Directorio

*   **YouTube**: Incrustación de un video utilizando la URL de embed, permitiendo reproducción controlada.
*   **SoundCloud**: Incrustación de un reproductor de audio, con parámetros de configuración en la URL (color, auto_play, etc.).
*   **Google Search**: Intento de incrustar resultados de búsqueda (Nota: muchos sitios populares como Google bloquean ser incrustados en iframes por razones de seguridad `X-Frame-Options`, aunque se usa un parámetro `igu=1` en el ejemplo para intentar evitarlo).
*   **Google Maps**: Incrustación de un mapa interactivo.

### Seguridad y Permisos (`allow`)

El atributo `allow` especifica qué características o hardware puede usar el iframe (ej. `autoplay`, `camera`, `encrypted-media`, `fullscreen`), proporcionando un control de seguridad granular sobre el contenido incrustado.

## [Volver al menu principal](../README.md)