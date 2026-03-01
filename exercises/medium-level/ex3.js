// 3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.
function contarVocales(palabra) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso:
console.log(contarVocales("Hola")); // 2
console.log(contarVocales("Ejemplo")); // 3
console.log(contarVocales("aeiou")); // 5

function contarVocales(palabra) {
    const vocales = "aeiou";
    let contador = 0;

    palabra = palabra.toLowerCase();

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

// Ejemplos:
console.log(contarVocales("Hola"));        // 2
console.log(contarVocales("JavaScript"));  // 3