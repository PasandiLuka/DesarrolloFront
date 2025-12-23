/* Condicionales en JavaScript */

// 1. IF - ELSE
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad. Puedes entrar.");
} else {
    console.log("Eres menor de edad. Acceso denegado.");
}

// 2. ELSE IF
let nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// 3. SWITCH
let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    default:
        nombreDia = "Fin de semana";
}
console.log("Hoy es: " + nombreDia);

// 4. OPERADOR TERNARIO (Simplificación de if/else)
// condicion ? valor_si_verdadero : valor_si_falso
let esSocio = true;
let costoEntrada = esSocio ? "$5.00" : "$10.00";

console.log("El costo de entrada es: " + costoEntrada);
