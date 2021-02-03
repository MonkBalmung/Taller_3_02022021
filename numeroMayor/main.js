// 1.	Realizar un programa que permita leer 2 números diferentes
//  y nos diga cual es el mayor de los 2 números.

do{
    let num_1 = parseInt(prompt("Ingrese el primer número:"));
    let num_2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num_1 !== num_2){
        console.log(comparacion(num_1, num_2));
        break;
    }
}while(true);

function comparacion(num_1, num_2){
    if(num_1 > num_2){
        return `El número ${num_1} es mayor que el número ${num_2}`;
    }else{
        return `El número ${num_2} es mayor que el número ${num_1}`;
    }
}

