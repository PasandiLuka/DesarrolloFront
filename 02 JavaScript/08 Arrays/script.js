/* Arrays (Arreglos) en JavaScript */

// Creación de Arrays
let frutas = ["Manzana", "Banana", "Cereza"];

console.log("Array inicial: ", frutas);

// Acceder a elementos
console.log("Primera fruta: " + frutas[0]); // Manzana

// Métodos Principales

// 1. push(): Agrega al final
frutas.push("Uva");
console.log("Push: ", frutas);

// 2. pop(): Elimina el último
let eliminada = frutas.pop();
console.log("Pop (eliminada " + eliminada + "): ", frutas);

// 3. unshift(): Agrega al inicio
frutas.unshift("Fresa");
console.log("Unshift: ", frutas);

// 4. shift(): Elimina el primero
frutas.shift();
console.log("Shift: ", frutas);

// 5. splice(): Agrega o elimina en una posición específica
// (indice, cuantos_borrar, elementos_a_agregar)
frutas.splice(1, 0, "Mango"); // Agrega Mango en índice 1
console.log("Splice (agregar Mango): ", frutas);

// 6. slice(): Copia una parte del array (no modifica el original)
let algunasFrutas = frutas.slice(1, 3);
console.log("Slice (copia): ", algunasFrutas);

// Métodos de Iteración (High Order Functions)

// 7. forEach(): Ejecuta una función por cada elemento
console.log("--- forEach ---");
frutas.forEach(fruta => console.log(fruta));

// 8. map(): Crea un NUEVO array transformando cada elemento
let frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log("Map: ", frutasMayusculas);

// 9. filter(): Crea un NUEVO array con los elementos que cumplan la condición
let numeros = [1, 5, 10, 15, 20];
let mayoresQueDiez = numeros.filter(num => num > 10);
console.log("Filter (>10): ", mayoresQueDiez);
