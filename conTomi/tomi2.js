//5 Mostrar los números impares comprendidos entre 35 y 120.

//lo unico que necesitarias es un for
for(let i = 35; i <= 120; i++){ //i es el numero que va a ir imprimiendo
    if(i % 2 != 0){ //si el resto de i entre 2 es diferente de 0
        console.log(i); //imprime el numero
    }
}

//6 Mostrar los números pares comprendidos entre 10 y 100, excepto el número 40.

for(let i = 10; i <= 100; i++){
    if(i % 2 == 0 && i != 40){
        console.log(i);
    }
}

//7 Dadas dos variables llamadas num1 y num2, intercambiar el valor de ellas. Es decir que, al finalizar el script,
// el valor de num1 debe estar en num2 y el de num2 en num1.

// let num1 = 10;
// let num2 = 20;
// console.log('num1 vale: '+ num1);
// console.log('num2 vale: '+ num2);
// let aux = num1;
// num1 = num2;
// num2 = aux;
// console.log('num1 vale: '+ num1);
// console.log('num2 vale: '+ num2);

//8-	Dadas tres variables, llamadas num1, num2 y num3, mostrar el valor de la menor y el valor de la mayor. 


//Forma 1
let num1 = 10;
let num2 = 20;
let num3 = 30;

// function mostrarMayorMenor(number1,number2,number3){
//     if(number1 > number2 && number1 > number3){
//         console.log('El numero mayor es: '+ number1);
//     }
//     if(number2 > number1 && number2 > number3){
//         console.log('El numero mayor es: '+ number2);
//     }
//     if(number3 > number1 && number3 > number2){
//         console.log('El numero mayor es: '+ number3);
//     }
//     if(number1 < number2 && number1 < number3){
//         console.log('El numero menor es: '+ number1);
//     }
//     if(number2 < number1 && number2 < number3){
//         console.log('El numero menor es: '+ number2);
//     }
//     if(number3 < number1 && number3 < number2){
//         console.log('El numero menor es: '+ number3);
//     }
// }


