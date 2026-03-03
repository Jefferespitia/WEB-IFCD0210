// 10. Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.
function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        console.log(anio + " es un año bisiesto.");
    } else {
        console.log(anio + " no es un año bisiesto.");
    }
}

esBisiesto(2026); 