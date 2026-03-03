// 7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.
function calcularEdad(añoNacimiento) {
    const añoActual = new Date().getFullYear();// Obtener el año actual utilizando el objeto Date
    return añoActual - añoNacimiento;// Calcular la edad restando el año de nacimiento al año actual
}

console.log(calcularEdad(1990)); // Ejemplo de uso: calcular la edad de una persona nacida en 1990  

function calcularEdad(anio, mes, dia) {
    const hoy = new Date();
    const fechaNacimiento = new Date(anio, mes - 1, dia); // mes - 1 porque enero es 0

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();

    // Verifica si aún no ha cumplido años este año
    if (
        mesActual < fechaNacimiento.getMonth() ||
        (mesActual === fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())
    ) {
        edad--;
    }

    return edad;
}

// Ejemplo de uso
console.log(calcularEdad(1990, 12, 15)); // Esto calculará la edad de una persona nacida el 15 de diciembre de 1990, teniendo en cuenta si ya ha cumplido años este año o no.