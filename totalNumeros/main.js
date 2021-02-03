// 2.	Realice un programa que calcule el 
// máximo de N números leídos desde teclado.

let lectura_numeros = [];
var totalNumeros = 0;
do{
    let num = parseInt(prompt("Ingrese un número: "));
    lectura_numeros.push(num);
    totalNumeros++;    
    let opc = parseInt(prompt("Deseas ingresar otro número \n1. Si. \n2. No."));
    switch (opc) {
        case 1:
            lectura_numeros.push(num);
            continue;
            break;
        case 2:
            console.log(`Cantidad de numeros ingresados ${lectura_numeros.length}`);
            console.log(lectura_numeros);
            break;
        default:
            alert("Error, intenta de nuevo");
            break;
    }
}while (true)








