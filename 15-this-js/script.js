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

// PARTE 5 - Explicit Binding

const sacha = {
    nombre: 'Sacha',
    saludar: function (){
        console.log(`Hola, me llamo ${this.nombre}!`) 
    }
}
//MIN 16:28 MAS TARDE SIGO


