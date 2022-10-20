/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let numString = JSON.stringify(num)
  let counter = 0
  let head = []
  let tail = []
  for(let i = 0; i<numString.length; i++){
    head.push(numString[i])
    tail.push(numString[numString.length-i-1])
  }


  for(let i = 0; i<numString.length;i++){
    if(head[i]==tail[i]){
      counter++
    }
  }
  if(counter==numString.length){
    return true
  }
  return false
}



// No modifiques nada debajo de esta linea //

console.log(numeroSimetrico(11711))
console.log(numeroSimetrico(11712))
console.log(numeroSimetrico(11713))
console.log(numeroSimetrico(2225222))