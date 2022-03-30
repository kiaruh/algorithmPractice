//-	Dadas dos variables llamadas num1 y num2,
// mostrar cuál de los números guardados en ellas es más grande.

// const constantes no modificables
// let variable de scope reducido
// var variable de scope amplio

function NombreDeLaFuncion (parametro1, parametro2, parametro3){
    //lo que se va a ejecutar 
    // uso los paramentros nombrados en la funcion parametro1, parametro2, parametro3
}

//##############################

// let num1 = 5
// let num2 = 30

// function mayor(numberOne, numberTwo){
//     if(num1 > num2){
//         return num1
//     }else{
//         return num2
//     }
// }

// console.log(mayor(num1, num2))

// let arr = [2, 1, 3, 4, 5, 6, 7, 8, 9, 10]

// function mayor(arrNumbers){ //molde de la funcion , el parametro que recibe es un array
//     let mayor = arrNumbers[0] //guardame el primer elemento
//     for(let i = 0; i < arrNumbers.length; i++){ //recorro el arreglo
//         console.log('va al indice ' + i + ' numero guardado: '  + mayor)
//         if(arrNumbers[i] > mayor){
//             console.log('compara ' + arrNumbers[i] + ' con guardado ' + mayor)
//             mayor = arrNumbers[i]
//         }
//     }
//     return mayor
// }

// console.log(mayor(arr))

//Ejemplos 1

// let array = ['pepe', 'juan', 'maria', 'jose']
// let array2 = [50, 60, 70, 80, 90, 100]
// function recorrerMostrar(arr){
//     for(let i = 0; i < arr.length; i++){
//         // console.log('indice '+ i + ' valor guardado: ' + arr[i]) //muestra el indice y el valor guardado
//         console.log(arr[i])//este muestra solamente el valor guardado
//     }
// }
// recorrerMostrar([22, 33, 44, 55, 66, 77, 88, 99, 100])
// console.log('##############################')
// recorrerMostrar(array)
// console.log('##############################')
// recorrerMostrar(array2)

//Ejemplos 2
//SUPONGAMOS QUE EL ARRAY DE NOMBRE Y APELLIDO ESTE ORDENADO Y TIENE LA MISMA LOGITUD
// let nom = ['pepe', 'juan', 'maria', 'jose']
// let ape = ['perez', 'gomez', 'lopez', 'martinez']

// //teniendo el molde de la funcion, obliga a que mandes los parametros que necesita 

// function nombreApellido(nombre, apellido){ 
//     for(let i = 0;i < nombre.length;i++){
//         console.log(nombre[i] + ' ' + apellido[i])
//     }
// }
// nombreApellido(nom, ape) //llamando a la funcion nombreApellido y mandando los parametros que necesita

//Ejemplo 3 abstracto
//mostrar datos de una persona sus datos nombre apellido dni y edad. Mediante muchas variables
// let nom = 'lucho'
// let ape = 'perez'
// let dn = '12345678'
// let ed = '30'

// function datosPersonalesVariables(nombre, apellido, dni, edad){
//     console.log('Hamster asd: ' + nombre) //muestra en el console un string y lo concatena con la variables
//     console.log('Apellido: ' + apellido)
//     console.log('DNI: ' + dni)
//     console.log('Edad: ' + edad)
//     console.log('##############################')
//     console.log(nombre)
//     console.log(apellido)
//     console.log(dni)
//     console.log(edad)
// }
// datosPersonalesVariables(nom,ape,dn,ed)
// datosPersonalesVariables('maria', 'hola', '2222222', '31')

// let persona1 = ['lucho', 'perez', '12345678', '30']
// let persona2 = ['maria', 'hola', '2222222', '31']

// function datosPersonalesArray(arrayPersona){
//     for(let i = 0; i < arrayPersona.length; i++){
//     console.log(arrayPersona[i])
//     //console.log('indice:  '+ i + ' valor: ' + arrayPersona[i])
//     }
// }
// datosPersonalesArray(persona1)
// console.log('##############################')
// datosPersonalesArray(persona2)
// console.log('##############################')
// datosPersonalesArray(['luciano', 'pez', '11111111', '40'])

//Ejemplos generalizados
//tipos de datos: string, number, boolean, array, object
//console.log
// let num1 = 10
// console.log('hola juan carlos') //muestra un string
// console.log(22) //muestra un numero
// console.log(false) //muestra un booleano
// console.log('edad: ' + 30) //muestra un string y concatena con un numero
// console.log("Un numero cualquiera: " + num1) //muestra un string y concatena con la variable num1
// console.log(`Un numero cualquiera: ${num1}`) //muestra un string y concatena con la variable num1 formato template literal
// console.log('##############################')


//https://www.w3schools.com/js/js_scope.asp
// Scope de las variables
let num1 = 10
let num2 = 20


function mostrarNumero(numero){
    return  numero
}
console.log(mostrarNumero(num1))
console.log(mostrarNumero(num1) + ' ' + mostrarNumero(num2))
let a = mostrarNumero(num2)
console.log(a)

//armar una funcion que reciba dos numeros y devuelva el mayor

function mayor(num1, num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}