// 13. Escribe una función generadora de nombres de usuario aleatorios, a partir de dos grupos de palabras dadas. Estos grupos de palabras pueden estar agrupados en arrays. (nombres=['Hugo', 'Luis'], apellidos=['Duro', 'Fabiano']). Retorna un nombre de usuario aleatorio con nombre, apellido y un número aleatorio del 1 al 100. (Por ejemplo -> 'Pepe Pérez 87'.)
function generarNombreUsuario(nombres, apellidos) {
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return `${nombre} ${apellido} ${numeroAleatorio}`;
}

// Ejemplo de uso
const nombres = ['Hugo', 'Luis'];
const apellidos = ['Duro', 'Fabiano'];
console.log(generarNombreUsuario(nombres, apellidos));