// 7.	Dados dos números enteros positivos N y D, 
// se dice que D es un divisor de N si el resto de dividir N entre D es 0. 
// Se dice que un número N es perfecto si la suma de sus divisores 
// (excluido el propio N) es N. Por ejemplo 28 es perfecto, 
// pues sus divisores (excluido elv28) son: 1, 2, 4, 7 y 14 y su suma es 1+2+4+7+14=28. 
// Hacer un organigrama que dado un número N nos diga si es o no perfecto.

// N es par
// D 

let num_N = parseInt(prompt("Ingrese un número: "));
listaDivisores = [];
let i = 1;
let acum = 0;
if((num_N%2) == 0){
    console.log(`El numero ${num_N} es par`);
    for(let i=1; i<=num_N; i++){
        division = num_N/i;
        while(division%2 == 0){
        listaDivisores.push(division);
        }
        console.log(listaDivisores);
    }
}

        // }if(division%2 == 0){
        //     acum+=i;
        //     }if(acum == num_N){
        //     console.log(`El número ${num_N} es un número perfecto.`);
        // }
    // 28}