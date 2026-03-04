// 1. Crea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola.
 
const readline = require("readline"); // carga un módulo de Node.js. Este módulo permite leer datos desde la terminal (lo que el usuario escribe).

const rl = readline.createInterface({ //createInterface conecta ambas cosas.
  input: process.stdin, // process.stdin → Entrada (lo que el usuario escribe).
  output: process.stdout // process.stdout → Salida (lo que se muestra en la consola).
});

rl.question("Ingresa la altura de la pirámide: ", function(entrada) { //rl.question() muestra el mensaje. Cuando el usuario escribe un número y presiona Enter, ese valor se guarda en entrada.
  const altura = parseInt(entrada); // Lo que escribe el usuario es texto. parseInt() lo convierte a número entero.

  if (isNaN(altura) || altura <= 0) {
    console.log("Por favor ingresa un número válido mayor que 0.");
  } else {
    for (let i = 1; i <= altura; i++) { // Empieza en 1 Se repite hasta llegar a la altura Cada repetición es una fila de la pirámide
      const espacios = " ".repeat(altura - i); // Calcula los espacios necesarios para centrar la pirámide. A medida que i aumenta, los espacios disminuyen.
      const asteriscos = "*".repeat(2 * i - 1); // Calcula el número de asteriscos para la fila actual. La fórmula 2 * i - 1 asegura que el número de asteriscos sea impar (1, 3, 5, etc.) y que aumente en cada fila.
      console.log(espacios + asteriscos);
    }
  }

  rl.close(); // Cierra la interfaz de lectura después de mostrar la pirámide.
});

// Alternativamente, si no quieres usar readline (modules de node.js), puedes usar prompt-sync para obtener la entrada del usuario de manera más sencilla. (navegador)
let altura = parseInt(prompt("Ingresa la altura de la pirámide:"));

if (isNaN(altura) || altura <= 0) {
  console.log("Por favor ingresa un número válido mayor que 0.");
} else {
  for (let i = 1; i <= altura; i++) {
    let espacios = " ".repeat(altura - i);
    let asteriscos = "*".repeat(2 * i - 1);
    console.log(espacios + asteriscos);
  }
}

let altura = 7; // Cambia este número para modificar la altura

if (isNaN(altura) || altura <= 0) {
  console.log("Por favor ingresa un número válido mayor que 0.");
} else {
  for (let i = 1; i <= altura; i++) {
    let espacios = " ".repeat(altura - i);
    let asteriscos = "*".repeat(2 * i - 1);
    console.log(espacios + asteriscos);
  }
}
