 /**
 * Crea una función para gestionar el saldo de una cuenta bancaria.
 *
 * La función recibe el saldo actual, una operación ("ingresar" o
 * "retirar") y una cantidad de dinero. No hay otro tipo de operaciones.
 *
 * Si la operación es "ingresar", la cantidad se suma al saldo.
 * Si la operación es "retirar", la cantidad se resta del saldo.
 *
 * @param {number} saldo Saldo actual de la cuenta
 * @param {string} operacion Puede ser "ingresar" o "retirar"
 * @param {number} cantidad Cantidad de dinero de la operación
 * @return {number} El nuevo saldo de la cuenta
 */

function gestionarCuenta(saldo, operacion, cantidad) {
return operacion === "ingresar" ? saldo + cantidad : saldo - cantidad;
}


// Prueba 1: Ingresar dinero
console.log(gestionarCuenta(1000, "ingresar", 500)); 
// Resultado esperado: 1500

// Prueba 2: Retirar dinero
console.log(gestionarCuenta(1000, "retirar", 300)); 
// Resultado esperado: 700

// Prueba 3: Ingresar una cantidad pequeña
console.log(gestionarCuenta(50, "ingresar", 20)); 
// Resultado esperado: 70

// Prueba 4: Retirar casi todo el dinero
console.log(gestionarCuenta(500, "retirar", 450)); 
// Resultado esperado: 50