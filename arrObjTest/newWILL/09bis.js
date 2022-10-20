/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function repetirCaracteres() {
    // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
    // que reciba como parametro un string
    // y devuelve un string en donde cada letra se repita una vez.
    // Por ej:
    // 'hola'.repeatCharacters() devuelve "hhoollaa"
    // Tu código aca:
    
  }
  
  // No modifiques nada debajo de esta linea //
  String.prototype.repeatCharacters = function(){
    let palabra = ''
    for(let i = 0; i<this.length;i++){
        palabra += this[i]
        palabra += this[i]
    }
    return palabra
}

  let palabra1 = 'henry'
  let palabra2 = 'hola'
  
  console.log(palabra1.repeatCharacters())
  console.log(palabra2.repeatCharacters())