// 12. La serie de Fibonacci es un problema matemático que realiza la suma de los dos números anteriores para generar el siguiente. Crea una función que imprima por consola la serie de Fibonacci hasta un número introducido por el usuario. El usuario debe ser preguntado por este número al iniciar la aplicación.
function fibonacci(n) {
    const series = [0, 1];
    for (let i = 2; i <= n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    console.log("Serie de Fibonacci hasta " + n + ": " + series.slice(0, n + 1).join(", "));
}

// Test
fibonacci(10);

function fibonacci(n) {
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);

    for (let i = 2; i <= n; i++) {
        let siguiente = a + b;
        console.log(siguiente);
        a = b;
        b = siguiente;
    }
}

// Ejemplo
fibonacci(5);


