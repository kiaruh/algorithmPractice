/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// function filtrar(funcion) {
//   // Escribi una función filtrar en el prototipo de Arrays,
//   // que recibe una funcion (callback) que devuelve true o false.
//   // filtrar los elementos de ese arreglo en base al resultado de esa funcion
//   // comparadora, devolver un nuevo arreglo con los elementos filtrados.
//   // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
//   // ej:
  
//   // productos.filtrar(function(p) {
//   //   return p.price >= 50;
//   // }) => [{price: 100, name:'tv'}]


// };

// No modifiques nada debajo de esta linea //

Array.prototype.filtrar = function (cb){
let arr = []
this.forEach( i => {
  if(cb(i)){
    arr.push(i)
}})
  return arr
}

let productos = [{
  price: 100,
  name: 'tv'
}, {
  price: 50,
  name: 'phone'
}, {
  price: 30,
  name: 'lamp'
}, {
  price: 51,
  name: 'algo1'
}, {
  price: 10,
  name: 'algo2'
}, {
  price: 52,
  name: 'algo3'
}]

let filtrado = productos.filtrar(function(item){
  return item.price > 50
})

console.log(filtrado)