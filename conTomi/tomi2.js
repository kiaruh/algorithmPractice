//APRENDER LOS OPERADORES DE JAVASCRIPT

//5 Mostrar los números impares comprendidos entre 35 y 120.

// si algo es igual a algo something == something
//si algo es estrictamente igual a algo something === something
//si algo es distinto de algo something != something

//lo unico que necesitarias es un for
// for(let i = 35; i <= 120; i++){ //i es el numero que va a ir imprimiendo
//     if(i % 2 != 0){ //si el resto de i entre 2 es diferente de 0 || SI i dividido 2 el resto es distinto a 0 entonces es impar
//         console.log(i); //imprime el numero
//     }
    
// }

//6 Mostrar los números pares comprendidos entre 10 y 100, excepto el número 40.
//doble ampersand && significa que ambos deben ser verdaderos es un AND

//otra opcion pero no tan eficiente seria 
// if(i%2==0){
//     if(i != 40){
//         console.log(i);
//     }
// }

// for(let i = 10; i <= 100; i++){ //
//     if(i % 2 == 0 && i != 40){ //si el resto de i entre 2 es igual a 0 y i es diferente de 40
//         console.log(i);
//     }
// }

//7 Dadas dos variables llamadas num1 y num2, intercambiar el valor de ellas. Es decir que, al finalizar el script,
// el valor de num1 debe estar en num2 y el de num2 en num1.

// let num1 = 10;
// let num2 = 20;
// let aux = num1; //Creo una variable auxiliar para usarlar de pivot
// console.log('num1 vale: '+ num1);
// console.log('num2 vale: '+ num2);
// console.log('aux vale: '+ aux);
// num1 = num2;
// num2 = aux;
// console.log('num1 vale: '+ num1);
// console.log('num2 vale: '+ num2);

//8 Dadas tres variables, llamadas num1, num2 y num3, mostrar el valor de la menor y el valor de la mayor. 

let num1 = 25;
let num2 = 10;
let num3 = 15;

function mostrarMayorMenor(number1,number2,number3){
    if(number1 > number2 && number1 > number3){
        console.log('El numero mayor es: '+ number1);
    }
    if(number2 > number1 && number2 > number3){
        console.log('El numero mayor es: '+ number2);
    }
    if(number3 > number1 && number3 > number2){
        console.log('El numero mayor es: '+ number3);
    }
    if(number1 < number2 && number1 < number3){
        console.log('El numero menor es: '+ number1);
    }
    if(number2 < number1 && number2 < number3){
        console.log('El numero menor es: '+ number2);
    }
    if(number3 < number1 && number3 < number2){
        console.log('El numero menor es: '+ number3);
    }
}

mostrarMayorMenor(num1,num2,num3);

//si fuese un array podrias hacerlo asi gracias
let arr = [25,10,15];

let mayor = -1000
let menor = 1000
for(let i = 0; i < arr.length; i++){
    if(arr[i] > mayor){
        mayor = arr[i];
    }
    if(arr[i] < menor){
        menor = arr[i];
    }
}
console.log('El numero mayor es: '+ mayor);
console.log('El numero menor es: '+ menor);