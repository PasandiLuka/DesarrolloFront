var nombreDeLaVariableVar
let nombreDeLaVariableLet
const nombreVariableConst = "Hola"

nombreDeLaVariableVar = "Pedro"
nombreDeLaVariableVar = "Ricardo"
nombreDeLaVariableVar = "Lucía"
nombreDeLaVariableVar = "María"

nombreDeLaVariableLet = "Pedro"
nombreDeLaVariableLet = "Ricardo"
nombreDeLaVariableLet = "Lucía"
nombreDeLaVariableLet = "María"

/* Siempre utilizar const a menos que el código requiera que una variable sea modificada */

/* var no se debe utilizar ya que este tipo de dato se puede redeclarar y podes pisar una variable ya creada */

/* Definir Variables */
const variable = "nombre";
const Variable = "nombre";
const _variable = "nombre";
const $variable = "nombre";
const variableBuena = "nombre";
const variablebuena = "nombre";
/* 
    Reglas:
        1) Se puede iniciar con $, minúsculas, mayúsculas y _(Guión bajo).
        2) No se puede iniciar con números pero si usarlos en el resto del nombre.
        3) No se puede usar caracteres especiales salvo $ y _  
        4) Los nombres de variables son CASE SENSITIVE, si tienen una letra diferente NO SON LA MISMA VARIABLE
*/

/* Se pueden declarar varias variables en una misma linea */
/* Aunque no sea necesario se recomienda cerrar las declaraciones con ";" */
let x, y, z;

x = 5;
y = 7;
z = x + y;

/* En este caso f apunta al lugar de memoria de h, no a su valor, esto esta mal */
let f, h;

f = h;

/* El punto y coma permite separar cuestiones */
let g, j, l;

g = 5; j = 7; l = x + y;

/* No le interesan los espacios y los saltos de linea */
const datosQueVienenDeLaBaseDeDatosDeElCliente =
    "Pedro";


/* Las llaves son el scope de la función */
function nombreDeFuncion()
{
    const nombreVariable = "Variable dentro de función"
}