// 6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.
function cuentaAtras(numero) {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}

        cuentaAtras(5); 


function cuentaAtras(numero) {
    let contador = numero;

    const intervalo = setInterval(() => {
        console.log(contador);
        contador--;

        if (contador < 0) {
            clearInterval(intervalo);
            console.log("¡Fin de la cuenta atrás!");
        }
    }, 1000);
}

        // Ejemplo de uso
        cuentaAtras(20); // Esto imprimirá los números del 5 al 0, uno por segundo, y luego mostrará "¡Fin de la cuenta atrás!"

