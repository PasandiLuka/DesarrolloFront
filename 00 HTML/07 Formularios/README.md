# Formularios HTML

Este directorio cubre la creación de formularios para capturar datos del usuario utilizando la etiqueta `<form>` y diversos tipos de controles de entrada.

## Etiqueta `<form>`

Define el formulario.
*   **`action`**: URL a donde se envían los datos (ej. `envio.php`).
*   **`method`**: Método HTTP de envío (`GET` o `POST`).
*   **`target`**: Dónde mostrar la respuesta (`_blank` para nueva pestaña).

## Controles de Entrada (`<input>`)

La etiqueta `<input>` es la más versátil usada en formularios, variando su comportamiento según el atributo `type`.

### Tipos de Input (`type`)

*   **`text`**: Campo de texto de una línea.
*   **`email`**: Campo para direcciones de correo (valida formato básico).
*   **`password`**: Campo para contraseñas (oculta los caracteres).
*   **`checkbox`**: Casilla de verificación. Permite seleccionar múltiples opciones (mismo `name` devuelve múltiples valores).
*   **`radio`**: Botón de opción. Permite seleccionar solo una opción de un grupo (mismo `name` para agrupar).
*   **`number`**: Campo numérico.
*   **`file`**: Selector de archivos para subir. Atributo `multiple` permite varios archivos.
*   **`submit`**: Botón para enviar el formulario.
*   **`reset`**: Botón para restablecer el formulario a sus valores iniciales.
*   **`button`**: Botón genérico (usado con JS).
*   **`date`**: Selector de fecha (calendario).

### Atributos de Validación y Configuración

*   **`placeholder`**: Texto de ayuda/ejemplo que desaparece al escribir.
*   **`required`**: Hace obligatorio el campo.
*   **`readonly`**: El campo es de solo lectura (se envía en el formulario).
*   **`disabled`**: El campo está desactivado (NO se envía en el formulario).
*   **`pattern`**: Expresión regular para validar el formato (ej. letras y números específicos).
*   **`minlength` / `maxlength`**: Longitud mínima y máxima de caracteres.
*   **`max`**: Valor máximo permitido (para fechas o números).
*   **`checked`**: Pre-selecciona un checkbox o radio.
*   **`value`**: Valor inicial o valor que se envía.

## Etiquetas Auxiliares

*   **`<label>`**: Etiqueta descriptiva para un input. El atributo `for` debe coincidir con el `id` del input para mejorar la accesibilidad y usabilidad (hacer clic en el label activa el input).
*   **`<textarea>`**: Área de texto multilínea. Dimensiones definidas por `rows` y `cols`.
*   **`<select>`**: Lista desplegable.
    *   **`<option>`**: Opción individual dentro del select. `selected` define la opción por defecto.
    *   **`<optgroup>`**: Agrupa opciones relacionadas dentro del select con una etiqueta (`label`).
*   **`<button>`**: Elemento de botón, similar a `<input type="button">` pero permite contenido HTML interno (texto, iconos).

## [Volver al menu principal](../README.md)