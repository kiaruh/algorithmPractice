let arregloDeColores = ['rojo', 'verde', 'azul', 'amarillo', 'rosa', 'naranja', 'morado', 'violeta', 'celeste', 'cafe']

let arregloDeColores2 = ['purpura', 'negro', 'salmon', 'lala']

function filter(arreglo,color){
    let result = []
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] != color ){
        result.push(arreglo[i])
        }
    }
    return result
}


let nuevosColores = filter(arregloDeColores, 'rojo')
console.log(nuevosColores)
console.log(filter(arregloDeColores2, 'purpura'))
