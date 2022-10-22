const piedra = 1
const papel = 2
const tijera = 3

let myPc = Math.floor(Math.random()*(4-1))+1
const myGame = prompt("Seleciona 1 para Piedra, 2 para Papel o 3 para Tijera: \n");

const winRock = ((myGame == piedra) && (myPc == tijera))
const winPaper = ((myGame == papel) && (myPc == piedra))
const winScissors = ((myGame == tijera) && (myPc == papel))
const win = (winRock, winPaper, winScissors)
const winAlert = ("You win!!! \\o/")
const lose1 = ((myGame == piedra) && (myPc == papel))
const lose2 = ((myGame == papel) && (myPc == tijera))
const lose3 = ((myGame == tijera) && (myPc == piedra))
const lose = (lose1 || lose2 || lose3)
const tie = ((myGame == myPc))
const bug = ((myGame < 1) || (myGame > 3))
const bugAlert = ("Dato incorrecto :/\n\nDebes colocar un numero entero:\n1, 2 o 3\n\nIntentalo de nuevo...\n")

if (win) {
    console.log(winAlert)
} else if (lose) {
    console.log("You lose :/")
} else if (tie) {
    console.log("You are tie.")
} else if (bug) {
    console.log(bugAlert)
} else {
    console.log("Error 404")
}