// 5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.
function contieneTodasLasVocales(cadena) {
    const vocales = "aeiou";
    cadena = cadena.toLowerCase(); 
    for (let vocal of vocales) {
        if (!cadena.includes(vocal)) {
            return false; // Si falta alguna vocal, devuelve false
        }
    }
    return true; // Si tiene todas las vocales, devuelve true
}


        console.log(contieneTodasLasVocales("Educacion")); // true
        console.log(contieneTodasLasVocales("Hola Mundo")); // false

function contieneTodasLasVocales(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const textoMinusculas = texto.toLowerCase();

    return vocales.every(vocal => textoMinusculas.includes(vocal));
}

    
        console.log(contieneTodasLasVocales("murciélago")); // true
        console.log(contieneTodasLasVocales("hola mundo")); // false

function contieneTodasLasVocales(texto) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    // Convertimos a minusculas y quitamos tildes
    const textoNormalizado = texto
        .toLowerCase()
        .normalize("NFD") //Separa las letras de sus tildes. Por ejemplo: "á" se convierte en "a" + un simbolo de tilde separado
        .replace(/[\u0300-\u036f]/g, ""); // Elimina esos simbolos de tilde. Asi:"á" termina siendo simplemente "a".

    return vocales.every(function(vocal) {
        return textoNormalizado.includes(vocal);
    });
}

        // Ejemplos
        console.log(contieneTodasLasVocales("murcielago")); // true
        console.log(contieneTodasLasVocales("murciélago")); // true
        console.log(contieneTodasLasVocales("hola mundo")); // false