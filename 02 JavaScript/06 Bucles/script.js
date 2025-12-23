/* Bucles en JavaScript */

// 1. FOR (Clásico)
// for (inicialización; condición; incremento)
console.log("--- Bucle FOR ---");
for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

// 2. WHILE
// Se ejecuta MIENTRAS la condición sea verdadera
console.log("--- Bucle WHILE ---");
let contador = 0;
while (contador < 3) {
    console.log("Contador While: " + contador);
    contador++;
}

// 3. DO...WHILE
// Se ejecuta al menos una vez, y luego evalúa la condición
console.log("--- Bucle DO...WHILE ---");
let numero = 10;
do {
    console.log("Esto se ejecuta al menos una vez, aunque 10 no es menor que 5");
} while (numero < 5);


// 4. FOR...OF (Para iterar Arrays/Listas)
console.log("--- Bucle FOR...OF ---");
let frutas = ["Manzana", "Banana", "Naranja"];

for (let fruta of frutas) {
    console.log("Fruta: " + fruta);
}

// 5. FOR...IN (Para iterar propiedades de Objetos)
console.log("--- Bucle FOR...IN ---");
let persona = { nombre: "Juan", apellido: "Pérez", edad: 30 };

for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}
