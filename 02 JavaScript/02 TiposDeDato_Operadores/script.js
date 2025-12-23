// Numeros
let variableNumero = 10; // Valor numerico
let variableDecimal = 10.10; // Valor flotante


//Texto
let variableTexto1 = 'Texto'; // Valor string
let variableTexto2 = "Texto"; // Valor string
/* Sirve para concatenar con variables */
let variableTexto3 = `Esta es una variable distinta ${variableNumero}`; // Valor string


//Booleano
let variableBool1 = true; //Verdadero
let variableBool2 = false; //Falso


/* Undefined es que el valor no se encuentra definido, en cambio null es la ausencia de cualquier valor */
// Undefined
let variableUndefined;

//NULL
let variableNull = null;


//Object
let variableObjeto =
{
    clave: "valor"
}


//ARRAY
let variableArrayNum = [1,2,3,4,5,6]; //Arreglos de números
let variableArrayStr = ["1","2","3","4"]; //Arreglos de strings


//Date
const variableDate = new Date("05-14-2025")




//Operadores

const variable = "Valor de la variable"; // Operador de asignación

const suma = 1 + 3; // + es el operador aritmético de la suma
const resta = 6 - 3; // - es el operador aritmético de la resta
const multiplicacion = 2 * 3; // * es el operador aritmético de la multiplicación
const division = 10 / 2; // / es el operador aritmético de la división
const resto = 5 % 2; // % es operador aritmético que nos dara el resto de una división
const exponente = 3 ** 3; // ** es el operador de la exponenciación

let x = 5;
let y = 5;

// Autoincremento y autodecremento
x++;
y--;

/* Permite ver resultados por la consola presionando el F12 en el navegador */
console.log();


/* Concatenación */
let a = 5;
let b = "5";
let c = a + b;

console.log(c) // "55"

//Solución
a = 5;
b = "5";
c = a + parseInt(b);

console.log(c) // 10

//Caso 2
a = 5.9;
b = "5.5";
c = a + parseFloat(b);
let d = a + parseInt(b);

console.log(c) // 11.4
console.log(d) // 10.9

// Operadores lógicos

//Solo enteros
x = 5;
y = 5;

let z = x == y; // True


// Combinados
x = 5;
y = "5";

z = x == y; // True
//Esto sucede porque compara el valor absoluto, ambos son 5

x = 5;
y = "5";

z = x === y; // False
//Esto sucede porque compara exactamente los dos valores

//NEGACIÓN

x = 5;
y = "5";

z = x != y; // False

/* Resto de operadores:
<  : menor que
>  : mayor que
<= : menor o igual que
>= : mayor o igual que 

Concatenadores lógicos:
&& : AND
|| : OR*/

