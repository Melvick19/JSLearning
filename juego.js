var piedra = 1
var papel = 2
var tijera = 3

var computadora = Math.floor(Math.random()*(3-1))+1
var miJuego = prompt("Seleciona 1 para Piedra, 2 para Papel o 3 para Tijera: \n");

if((miJuego == papel) && (computadora == tijera)) {
    console.log("PC: Tijera\nTu: Papel\n\nPerdiste...\n ")
} else if((miJuego == piedra) && (computadora == papel)) {
    console.log("PC: Papel\nTu: Piedra\n\nPerdiste...\n ")
} else if((miJuego == tijera) && (computadora == piedra)) {
    console.log("PC: Piedra\nTu: Tijera\n\nPerdiste...\n ")
} else if((miJuego == papel) && (computadora == piedra)) {
    console.log("PC: Piedra\nTu: Papel\n\nGanaste!!!\n ")
} else if((miJuego == piedra) && (computadora == tijera)) {
    console.log("PC: Tijera\nTu: Piedra\n\nGanaste!!!\n ")
} else if((miJuego == tijera) && (computadora == papel)) {
    console.log("PC: Papel \nTu: Tijera\n\nGanaste!!!\n ")
} else if((miJuego == papel) && (computadora == papel)) {
    console.log("PC: Papel\nTu: Papel\n\nEmpate.\n ")    
} else if((miJuego == piedra) && (computadora == piedra)) {
    console.log("PC: Piedra\nTu: Piedra\n\nEmpate.\n ")    
} else if((miJuego == tijera) && (computadora == tijera)) {
    console.log("PC: Tijera \nTu: Tijera \n\nEmpate.\n ")
} else {
    alert("Dato incorrecto :/\n\nDebes colocar un numero entero:\n1, 2 o 3\n\nIntentalo de nuevo...\n ")
}