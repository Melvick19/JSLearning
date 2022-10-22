const piedra = 1
const papel = 2
const tijera = 3

const computadora = Math.floor(Math.random()*(4-1))+1
let miJuego = ["Seleciona 1 para Piedra, 2 para Papel o 3 para Tijera: \n"];

const error = "↑ Error!\nDato incorrecto :/\n\nDebes colocar un numero entero:\n1, 2 o 3\n\nIntentalo de nuevo:"
const win = "Ganaste!!! \\o/ \n"
const lose = "Perdiste...\n"
const tie = "Empate.\n"

function pregunta(a){
    process.stdout.write(miJuego[a]);
}
process.stdin.on('data', function(miJuego){

if((miJuego == papel) && (computadora == tijera)) {
    console.log("PC: Tijera\nTu: Papel\n\n" + lose)
    process.exit();
} else if((miJuego == piedra) && (computadora == papel)) {
    console.log("PC: Papel\nTu: Piedra\n\n" + lose)
    process.exit();
} else if((miJuego == tijera) && (computadora == piedra)) {
    console.log("PC: Piedra\nTu: Tijera\n\n" + lose)
    process.exit();
} else if((miJuego == papel) && (computadora == piedra)) {
    console.log("PC: Piedra\nTu: Papel\n\n" + win)
    process.exit();
} else if((miJuego == piedra) && (computadora == tijera)) {
    console.log("PC: Tijera\nTu: Piedra\n\n" + win)
    process.exit();
} else if((miJuego == tijera) && (computadora == papel)) {
    console.log("PC: Papel \nTu: Tijera\n\n" + win)
    process.exit();
} else if((miJuego == papel) && (computadora == papel)) {
    console.log("PC: Papel\nTu: Papel\n\n" + tie)
    process.exit();    
} else if((miJuego == piedra) && (computadora == piedra)) {
    console.log("PC: Piedra\nTu: Piedra\n\n" + tie) 
    process.exit();   
} else if((miJuego == tijera) && (computadora == tijera)) {
    console.log("PC: Tijera \nTu: Tijera \n\n" + tie)
    process.exit();
} else {
    console.log(error)
}})
pregunta(0)