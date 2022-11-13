'use strict'


// const botonSaludar = document.querySelector('[botonSaludar]')
const botonSaludar = document.getElementsByClassName('boton') //ESTO RETORNA UN ARRAY LPMQMRMP!!!

const saludar = function () {
    console.log(window)
}
console.log(botonSaludar)

botonSaludar[0].addEventListener('click',saludar)