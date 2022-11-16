'use strict'//USANDO MODO ESTRICTO

// 1 - Lexical Binding (Arrow Functions)
// 2 - New Binding (Instanciar Objetos)
// 3 - Explicit Binding (Invocacion Indirecta) //SI YA SE NO ESTOY USANDO TILDES, Gracias vuelvas prontos 😊
// 4 - Implicit Binding (Invocacion de Metodo)
// 5 - Default Binding (Invocacion Directa)

//Contexto -> This != Contexto de ejecución -> pila de ejecución

// const botonSaludar = document.querySelector('[botonSaludar]') //Esto por si no quieren trabajar con un Array

//PARTE 0 

// const botonSaludar = document.getElementsByClassName('boton') //Esto retorna un Array
// const saludar = function () {
//     console.log(this)
// }

// botonSaludar[0].addEventListener('click',saludar) //aca si tuvieras un array de botones, se podria hacer un map o for each

// console.log(saludar) //Ver el obj dentro de la consola Chrome

//PARTE 1 - THIS ES EL CONTEXTO

// const sacha = { //Dejo sacha porq es el ej de sacha y para que sea igual al del video
//  nombre: 'sacha',
//  saludar: function () {
//     console.log(`Hola, me llamo ${this.nombre}!`)
//  }
// }

// sacha.saludar() //Hola, me llamo sacha!

// PARTE 2 - HARRY POTTER Y EL MISTERIO DE THIS

const harry = {
    nombre: 'Harry',
    saludar: function (){
        console.log(`Hola, me llamo ${this.nombre}!`) 
    }
}

// harry.saludar() // Hola, me llamo Harry!
// const saludar =  harry.saludar

// saludar() //Hola, me llamo undefined! -> si NO llega a aparecer esto, comenten la linea 1 'use strict'

// const boton = document.getElementById('miBoton')
// boton.addEventListener('click', harry.saludar) //Hola, me llamo undefined!

//PARTE 3 - DEFAULT BINDING

// function quienSoy() {
//     // console.log(`Hola, yo soy: `,this)
//     console.log(`Hola, yo soy: `,window) //para modo estricto 
// }

// quienSoy() //sin modo estricto: window {}  - con modo estricto: Hola, yo soy:  undefined

// const sacha = {
//     nombre: 'Sacha',
//     saludar: function (){
//         console.log(`Hola, me llamo ${this.nombre}!`)
//     },
//     hermano: {
//         nombre: 'Eric',
//         saludar: function (){
//             console.log(`Hola, el hermano, me llamo ${this.nombre}`)
//         }
//     }
// }

// sacha.saludar() //Hola, me llamo Sacha!
// sacha.hermano.saludar() //Hola, el hermano, me llamo Eric

//PARTE 4 - DEFAULT BINDING & IMPLICIT BINDING

// const sacha = { //default Biding
//     nombre: 'Sacha',
//     twitter: '@sachalifs',
//     saludar: function (){
//         function seguimeEnTwitter(){
//             console.log(`seguime en Twitter: ${this.twitter}`) //Uncaught TypeError: this is undefined
//         }

//         console.log(`hola, me llamo ${this.nombre}`)
//         seguimeEnTwitter()
//     }
// }

// const sacha = { //solucion de lo anterior
//     nombre: 'Sacha',
//     twitter: '@sachalifs',
//     saludar: function (){
//         console.log(`hola, me llamo ${this.nombre}`)
//         this.seguimeEnTwitter()
//     },
//     seguimeEnTwitter: function (){
//         console.log(`seguime en Twitter: ${this.twitter}`) 
//     }
// }

// sacha.saludar() //hola, me llamo Sacha & Uncaught TypeError: this is undefined || SOLUCION: hola, me llamo Sacha & seguime en Twitter: @sachalifs

// PARTE 5 - EXPLICIT BINDING (bind, call y apply)

// const sacha = {
//     nombre: 'Sacha',
//     saludar: function (){
//         console.log(`Hola, me llamo ${this.nombre}!`) 
//     }
// }


const sacha = {
    nombre: 'Sacha',

    // saludar: function (gritando, conDespedida){
    //     const saludoNormal = `Hola, me llamo ${this.nombre}!`
    //     const despedidaNormal = 'Chau!'
       
    //    const saludo = gritando ? saludoNormal.toUpperCase() : saludoNormal
    //     const despedida = gritando ? despedidaNormal.toUpperCase() : despedidaNormal

    //     console.log(saludo)

    //     if(conDespedida){
    //         console.log(despedida)
    //    }
    // }

    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}!`)
    }
}

// sacha.saludar(true,true) //HOLA, ME LLAMO SACHA! & CHAU!
const pepe = { nombre: 'Pepe'}
// pepe.saludar = sacha.saludar //pero esto no lo queres hacer asi (opcion valida)
// sacha.saludar.call(pepe,true, true) //el metodo se ejecuta sobre el objeto q le pasamos 
// sacha.saludar.apply(pepe,[true,true]) // lo mismo que call pero los argumentos se pasan dentro de un array -> HOLA, ME LLAMO PEPE! & CHAU!

const boton = document.getElementById('miBoton')
// boton.addEventListener('click',sacha.saludar.call(sacha)) //Hola, me llamo Sacha! -> call y apply invocan el mensaje en el momento

//ACA VIENE BIND 🥳🥳 -> metodo que retorna una nueva funcion con el contexto enlazado al objeto que le digamos Function.prototype.bind
// boton.addEventListener('click',sacha.saludar.bind(sacha)) //Hola, me llamo Sacha!
boton.addEventListener('click',sacha.saludar.bind(pepe)) //Bonus track -> Hola, me llamo Pepe!

//UNA FUNCION QUE FUE CREADA CON BIND NO PUEDE VOLVER A SER ENLAZADA A OTRO OBJETO (Enlazamiento fuerte) **CURRYING

//PARTE 6 - NEW BINDING (instanciar objetos)

// function Persona(nombre){
//     this.nombre = nombre
// }

// const otroSacha = new Persona('Sacha') // si ya se q no es el mismo, ya hay muchos const sacha, sorry not sorry


//PARTE 7 - LEXICAL BINDING -> se produce cuando escribimos funciones con arrow function

const otroSacha2 = { //Lexical binding se resuelve el problema que teniamos con default binding
    nombre: 'Sacha',
    twitter: '@sachalifs',
    saludar: function (){
        const seguimeEnTwitter = () => {
            console.log(`seguime en Twitter: ${this.twitter}`) //las => functions se ejecutan en el mismo contexto que fueron creadas, enlazamiento fuerte tmb
        }

        console.log(`hola, me llamo ${this.nombre}`)
        seguimeEnTwitter()
    }
}

otroSacha2.saludar() //hola, me llamo Sacha & seguime en Twitter: @sachalifs

//ERRORES COMUNES


const otroSacha3 = { 
    nombre: 'Sacha',
    twitter: '@sachalifs',
    saludar:  () => { //va a quedar enlazada en el contexto global de this q es el objeto window
        const seguimeEnTwitter = () => {
            console.log(`seguime en Twitter: ${this.twitter}`) 
        }

        console.log(`hola, me llamo ${this.nombre}`)
        seguimeEnTwitter()
    }
}

otroSacha3.saludar() // hola, me llamo undefined & seguime en Twitter: undefined

// class Persona2 { //CUANDO USAMOS CLASES ES5 los metodos de instacia no estan fuertemente enlazados a los objetos que creemos
//     constructor(nombre){
//         this.nombre = nombre
//         this.saludar = this.saludar.bind(this) //enlazar fuertemente los metodos de instancia
//     }

//     saludar() {
//         console.log(`Hola, me llamo ${this.nombre}!`)
//     }
// }

class Persona2 { //Se puede logar lo mismo con => function
    constructor(nombre){
        this.nombre = nombre
    }

    saludar = () => {
        console.log(`Hola, me llamo ${this.nombre}!`) //no hay q usar bind en el constructor
    }
}

const otroSacha4 = new Persona2('Pepito') //Basta de Sachas jaja

otroSacha4.saludar() //Hola, me llamo Pepito!

//EN QUE CONTEXTO SE ESTA EJECUTANDO == QUE VALOR TIENE THIS


