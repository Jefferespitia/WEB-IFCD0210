// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.
function esPalindromo(palabra) {
    const palabraSinEspacios = palabra.replace(/\s/g, '').toLowerCase(); // Eliminar espacios y convertir a minúsculas / / → Indica que es una expresión regular. \s → Significa cualquier espacio en blanco: espacio normal, tab, salto de línea. g → Significa global (todos los espacios, no solo el primero).  
    const palabraReversa = palabraSinEspacios.split('').reverse().join('');// Invertir la palabra
    return palabraSinEspacios === palabraReversa;// Comparar la palabra original sin espacios con la palabra invertida
}

    // Ejemplo de uso:
    console.log(esPalindromo("anilina")); // true
    console.log(esPalindromo("reconocer")); // true
    console.log(esPalindromo("hola")); // false
    console.log(esPalindromo("Ana lava lana")); 

function esPalindromo(palabra) {
    // Convertimos a minúsculas para evitar problemas con mayúsculas
    palabra = palabra.toLowerCase();
    
    // Invertimos la palabra
    const invertida = palabra.split('').reverse().join('');
    
    // Comparamos
    return palabra === invertida;
}

// Ejemplos:
    console.log(esPalindromo("oso"));     // true   
    console.log(esPalindromo("Hola"));    // false
    console.log(esPalindromo("Anilina")); // true
    console.log(esPalindromo("reconocer")); // true 
    console.log(esPalindromo("Ana lava lana")); // 