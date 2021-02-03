// 1.	Realizar un programa que permita leer 2 números diferentes
//  y nos diga cual es el mayor de los 2 números.
alert("Vamos a comparar dos números \ncualesquiera, para determinar cuál es el mayor.")

let num_1 = parseInt(prompt("Ingrese un número entero: "));
let num_2 = parseInt(prompt("Ingrese un otro número entero: "));

while(num_1==num_2){
    alert("Ambos números son iguales. Intentalo de nuevo:");
    num_1 = parseInt(prompt("Ingrese un número entero: "));
    num_2 = parseInt(prompt("Ingrese un otro número entero: "));
}

if(num_1!=num_2){
    if(num_1>num_2){
        console.log(`El número ${num_1} es mayor que ${num_2}`);
    }else if(num_2>num_1){
        console.log(`El número ${num_2} es mayor que ${num_1}`);
    }else{
        console.log(`Ambos números son iguales.`)
    }
}



// console.log(num_1, num_2);


// do{
//     let num_1 = parseInt(prompt("Ingrese el primer número:"));
//     let num_2 = parseInt(prompt("Ingrese el segundo número:"));
//     if (num_1 !== num_2){
//         console.log(comparacion(num_1, num_2));
//         break;
//     }
// }while(true);

// function comparacion(num_1, num_2){
//     if(num_1 > num_2){
//         return `El número ${num_1} es mayor que el número ${num_2}`;
//     }else{
//         return `El número ${num_2} es mayor que el número ${num_1}`;
//     }
// }

