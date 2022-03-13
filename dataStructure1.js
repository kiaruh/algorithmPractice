//Free code camp Data Structure 1

//otra forma de resolver un palindromo
let palabra = 'onomatopeya'
let palabraReverse = ''
for(let i = 1; i <= palabra.length; i++){
   palabraReverse += palabra[palabra.length - i]
}
console.log(palabraReverse);

//Arreglo multidiimensional
let arreglo = [[1,2,3],[4,5,6],[7,8,9],10,11,12]
// console.log(arreglo[0][1]) //2
// console.log(arreglo[1][2]) //8
// console.log(arreglo[2][0]) //7
// console.log(arreglo[3]) //10

//funciones de arreglos - push, pop, shift (elimina el primero), unshift (agrega al principio), splice (elimina y agrega)
let arr1 = ['cat', 'dog', 'rabbit']
let arr2 = ['red', 'blue', 'green']
let arr3 = ['a', 'b', 'c']
arr2.push(arr1)
console.log(arr2)
arr2.shift() // elimina el primer elemento
arr2.unshift(arr3) // agrega al principio
console.log(arr2) 
delete arr2[arr2.length - 1] // elimina el ultimo elemento
console.log(arr2)
arr1.splice(1,1) // elimina el elemento en la posicion 1 y 1 elemento (puedo elegir la cantidad de elementos que quiera)
console.log(arr1)



