function render(text) { // parámetros
    console.log(text);
}

render('Función render');

function add(n1, n2) { // parametros
    const result = Number(n1) + Number(n2)
    return result;
}

// render(add('2','2')); // argumentos = DATOS
// render(add(6,8)); // argumentos = DATOS

const a = 2
const b = 6

const r = add(a,b)
console.log(r);
