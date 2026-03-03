const btnCambiarParrafo = document.getElementById("btnCambiarParrafo");
const btnNombreUsuario = document.getElementById("btnNombreUsuario");

const parrafo = document.getElementById("parrafo");
const nombreUsuario = document.getElementById("inputUsuario");


btnCambiarParrafo.addEventListener("click", () =>
{
    parrafo.textContent = "hola";
});

btnNombreUsuario.addEventListener("click", () =>
{
    const valor = nombreUsuario.value;
    if(valor.trim() != "")
    {
        parrafo.textContent = "Saludos " + valor + "!";
    }else
    {
        parrafo.textContent = "Ingrese un nombre";
    }
});



const resultado = document.getElementById("resultado");

const btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", () =>
{
    const inputNombre = document.getElementById("inputNombre");
    const inputApellido = document.getElementById("inputApellido");
    const inputEmail = document.getElementById("inputEmail");
    const inputTelefono = document.getElementById("inputTelefono");
    const persona = 
    {
        nombre: inputNombre,
        apellido: inputApellido,
        email: inputEmail,
        telefono: inputTelefono,
        MostrarDatos: () =>{
            return nombre + " " + apellido + " " + email + " " + telefono;
        }
    }
    resultado.textContent = persona.MostrarDatos();
});

