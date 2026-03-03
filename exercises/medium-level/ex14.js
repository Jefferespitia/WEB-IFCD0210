// 14. Crea una función calculadora de propinas. Debe recibir el total de la cuenta y el porcentaje de propina deseado, con ello deberá calcular e imprimir por consola la cuenta, la propina que corresponde a la cuenta introducida, y el total a pagar. Redondea a dos decimales.
function calcularPropina(total, porcentaje) {
    const propina = total * (porcentaje / 100);
    const totalConPropina = total + propina;
    console.log("Total de la cuenta: $" + total.toFixed(2));
    console.log("Propina (" + porcentaje + "%): $" + propina.toFixed(2));
    console.log("Total a pagar: $" + totalConPropina.toFixed(2));
}

// Ejemplo de uso
calcularPropina(100, 15);