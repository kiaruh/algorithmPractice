function ideas(array) {
    // La funcion llamada 'ideas' recibe un array 'array' de strings como parametro
    // entre estas ideas hay algunas buenas y otras no, si no encontramos una 'buena' retornamos 'Fail!'
    // si encontramos por lo menos una 'buena' retornamos 'Activa!'
    // y si encontramos al menos 3 'buena' retornamos 'Jackpot!'
    // Por ej:
    // ideas(['hola', 'palabra']) debe devolver 'Fail!'
    // ideas(['hola', 'buena', 'hi']) debe devolver 'Activa!'
    // Tu código aca:
    let counter = 0 

    for(let i = 0; i<array.length ;i++){
        if(array[i]=='buena'){
            counter++
        }
    }
    if(counter>=3){
        return 'Jackpot!'
    }else if(counter==1){
        return 'Activa!'
    }
    return 'Fail!'
  }
  
  
  console.log(1)
  console.log(ideas(["short", "words", "hi",'buena','buena','buena']))
  console.log(2)
  console.log(ideas(['hola', 'palabra']))
  console.log(3)
  console.log(ideas(['hola', 'buena', 'hi']))