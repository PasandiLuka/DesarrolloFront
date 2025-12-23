/* Objetos en JavaScript */

// 1. Sintaxis de Objeto Literal
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    color: "Rojo",
    encendido: false,

    // Método: Una función dentro de un objeto
    encender: function () {
        this.encendido = true; // "this" hace referencia a ESTE objeto
        console.log("El coche " + this.marca + " se ha encendido.");
    },

    info: function () {
        return this.marca + " " + this.modelo + " (" + this.anio + ")";
    }
};

// 2. Acceder a Propiedades
console.log("Marca: " + coche.marca); // Notación de punto (recomendada)
console.log("Modelo: " + coche["modelo"]); // Notación de corchetes

// 3. Modificar Propiedades
coche.color = "Negro";
console.log("Nuevo color: " + coche.color);

// 4. Invocar Métodos
coche.encender();
console.log(coche.info());


// 5. Objetos Anidados
const persona = {
    nombre: "Ana",
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123,
        ciudad: "Springfield"
    }
};

console.log("Ciudad: " + persona.direccion.ciudad);


// 6. Desestructuración (Destructuring) - ES6
// Extraer propiedades a variables
const { nombre, direccion } = persona;
const { ciudad } = direccion;

console.log("Nombre extraído: " + nombre);
console.log("Ciudad extraída: " + ciudad);

console.log();
console.log();
console.log();

const auto1 = {
    marca: "Fiat",
    modelo: "Uno",
    peso: 1000,
    color: "Rojo"
};

const auto2 = {
    marca: "Renault",
    modelo: "12",
    peso: 1100,
    color: "Marrón"
};

auto1.marca = "BMW";
auto1.modelo = "X5";

console.log(auto1);



console.log(auto1.marca);
console.log(auto1["marca"]);

const vendedor = {
    nombre: "Pedro",
    apellido: "Gonzales",
    empresa: "Auto S.A",
    habilidadesBlandas: ["Carisma", "Puntualidad"],
    vender: function() { return "Pedro vendio un auto."},
    /* El this hacer referencia a los parametros fuera del scope (Fuera de la función) */
    nombreCompleto: function() { return this.nombre + " " + this.apellido}
};

console.log(vendedor.vender());
console.log(vendedor.nombreCompleto());
console.log(vendedor.habilidadesBlandas);