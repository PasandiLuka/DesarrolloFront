//Scope
let x = 5;

{
    let x = 2;
    console.log(x);  // 2
}

console.log(x);  // 5

//Scope
let y = 5;

/* Al scope le afecta los datos del ambiente a menos que los sobreescriba */

{
    console.log(y);  // 5
}

console.log(y);  // 5


//Operadores compuestos

let f = 5;

{
    let y = 3;
    f += y;
    console.log(f); // 8
}