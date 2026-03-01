// 1. Crea una función que elimine el primer y último caracter de un string recibido por parámetros.
function eliminarPrimerYUltimoCaracter(str) {
    if (str.length <= 2) {
        return ''; // Si el string tiene 2 o menos caracteres, devuelve una cadena vacía
    }   
    return str.substring(1, str.length - 1); // Elimina el primer y último carácter
}

// Ejemplo de uso:
console.log(eliminarPrimerYUltimoCaracter("Hola Mundo")); // Output: "ola Mund"
console.log(eliminarPrimerYUltimoCaracter("A")); // Output: ""
console.log(eliminarPrimerYUltimoCaracter("AB")); // Output: ""




function eliminarPrimerYUltimo(str) {
    if (str.length <= 2) {
        return ""; // Si tiene 2 o menos caracteres, no queda nada
    }
    return str.slice(1, -1);
}

// Ejemplo:
console.log(eliminarPrimerYUltimo("Hola")); // "ol"
console.log(eliminarPrimerYUltimo("A")); // ""
console.log(eliminarPrimerYUltimo("AB")); // ""
