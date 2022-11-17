class Persona {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    presentarse(){
        console.log(this.nombre)
    }
}

class Cheff extends Persona{
    constructor(nombre,edad,restaurante){
        super(nombre,edad)
        this.restaurante = restaurante
        this.nombre = 'juan'
    }

    // presentarse(){
    //     console.log('hola ' + this.nombre)
    // }
}

const pepe = new Cheff('Pepe',30,'Micasa')

pepe.presentarse()
