/* Funciones en JavaScript */

// 1. Declaración de Función (Function Declaration)
// Se pueden llamar antes de ser declaradas (Hoisting)
function saludar(nombre) {
    console.log("Hola, " + nombre + " (Función Declarada)");
}

saludar("Juan");

/* Utilizar las de abajo en adelante */

// 2. Expresión de Función (Function Expression)
// No tienen hoisting. Deben declararse antes de usarse.
const despedir = function (nombre) {
    return "Adiós, " + nombre;
};

console.log(despedir("Maria"));

// 3. Funciones Flecha (Arrow Functions) - ES6
// Sintaxis más corta. "this" se comporta diferente.
const sumar = (a, b) => {
    return a + b;
};

// Si es una sola línea, el return es implícito:
const multiplicar = (a, b) => a * b;

console.log("Suma (5 + 3): " + sumar(5, 3));
console.log("Multiplicación (4 * 2): " + multiplicar(4, 2));

// 4. Parámetros por defecto
function cocinar(ingrediente = "Pollo") {
    console.log("Cocinando " + ingrediente);
}

cocinar(); // Usa "Pollo"
cocinar("Carne"); // Usa "Carne"