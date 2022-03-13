//Free code camp Data Structure 1

//otra forma de resolver un palindromo
let palabra = 'onomatopeya'
let palabraReverse = ''
for(let i = 1; i <= palabra.length; i++){
   palabraReverse += palabra[palabra.length - i]
}
console.log(palabraReverse);