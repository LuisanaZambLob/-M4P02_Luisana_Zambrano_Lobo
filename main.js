
function almacenarEnLocalStorage() {
    var clave = "M4_UD02_P02";
    var valor = "Nombre del alumno";
    
    // Verificar si la clave ya existe en localStorage

    if (localStorage.getItem(clave) === null) {

    // Si no existe, almacenar la clave y el valor
        localStorage.setItem(clave, valor);
        alert("Dato almacenado en localStorage.");
    
    // Si ya existe, mostrar un mensaje de error

    } else {
        alert("Error: Ya existe un dato con la misma clave en localStorage.");
    }
}
    // Función para almacenar en sessionStorage

   function almacenarEnSessionStorage() {
    var clave = "Date";
    var valor = new Date().getTime().toString();
           
    // Almacenar la clave y el valor en sessionStorage

    sessionStorage.setItem(clave, valor);
    alert("Dato almacenado en sessionStorage.");
}

   // Función para mostrar la información almacenada en ambos almacenes

function mostrarInformacion() {
    var infoLocalStorage = localStorage.getItem("M4_UD02_P02");
    var infoSessionStorage = sessionStorage.getItem("Date");

    // Mostrar la información almacenada en una alerta

    alert("Información en localStorage: " + infoLocalStorage + "\nInformación en sessionStorage: " + infoSessionStorage);
}
