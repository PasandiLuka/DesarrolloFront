# Objetos en JavaScript

Los objetos son la pieza central de JavaScript. Representan entidades del mundo real y almacenan datos en forma de pares `clave: valor`.

## Sintaxis de Objeto Literal
```javascript
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() { console.log("Hola"); }
};
```

## Conceptos Importantes
-   **Propiedades:** Las variables dentro de un objeto (ej. `nombre`, `edad`).
-   **Métodos:** Las funciones dentro de un objeto (ej. `saludar`).
-   **this:** Palabra clave que hace referencia al objeto actual dentro de un método.
-   **Notación de punto:** `persona.nombre`.
-   **Destructuring:** Sintaxis para extraer propiedades fácilmente: `const { nombre } = persona;`.

## Ejemplo
En la consola (`script.js`), se crean objetos, se modifican sus propiedades y se llaman métodos.
