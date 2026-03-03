// 9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.
function lanzarDado() {
    const resultado = Math.floor(Math.random() * 6) + 1;
    console.log("El dado ha sido lanzado y el resultado es: " + resultado);
}

lanzarDado();