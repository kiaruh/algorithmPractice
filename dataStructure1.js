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
console.log(arreglo[0][1])
console.log(arreglo[1][2])
console.log(arreglo[2][0])
console.log(arreglo[3])

