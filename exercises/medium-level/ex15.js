// 15. Escribe una función que calcule el descuento aplicado a un precio. La función recibirá el precio y el descuento del artículo en venta, con ellos deberá calcular e imprimir por consola el precio, el descuento y el total del precio una vez aplicado el descuento. Redondea a dos decimales.
function calcularDescuento(precio, descuento) {
    const montoDescuento = precio * (descuento / 100);
    const precioFinal = precio - montoDescuento;
    console.log("Precio original: $" + precio.toFixed(2));
    console.log("Descuento (" + descuento + "%): $" + montoDescuento.toFixed(2));
    console.log("Precio final: $" + precioFinal.toFixed(2));
}

// Ejemplo de uso
calcularDescuento(100, 20);
calcularDescuento(59.99, 15);
calcularDescuento(250, 10);