// 4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).
function esPangrama(cadena) {
    const abecedario = "abcdefghijklmnopqrstuvwxyz";
    const letrasEncontradas = new Set();
    cadena = cadena.toLowerCase();

    for (let letra of cadena) {
        if (abecedario.includes(letra)) {
            letrasEncontradas.add(letra);
        }
    }
    return letrasEncontradas.size === abecedario.length;
}

// Ejemplos:
    console.log(esPangrama("The quick brown fox jumps over the lazy dog")); // true
    console.log(esPangrama("Hola mundo")); // false


{
function esPangrama(texto) {
    
    texto = texto.toLowerCase().replace(/[^a-zñ]/g, '');// Convertimos a minúsculas y eliminamos espacios replace(/[^a-zñ]/g, ''). [^...] → Niega lo que está dentro. a-zñ → Todas las letras del abecedario español. g → Global (reemplaza todos). Reemplaza todo lo que no sea letra por nada. Esto elimina números, espacios, símbolos, etc.

    const abecedario = "abcdefghijklmnñopqrstuvwxyz";

    for (let letra of abecedario) {
        if (!texto.includes(letra)) {
            return false; // Si falta una letra, no es pangrama
        }
    }

    return true; // Si tiene todas, sí es pangrama
}

// Ejemplos:
    console.log(esPangrama("The quick brown fox jumps overñ the lazy dog")); // depende del texto
  
}