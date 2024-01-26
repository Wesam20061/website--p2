

//Hier stellen we de regels in voor het spel. Speler "O" en speler "X" wisselen elkaar af, en we beginnen met speler "X".

let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT


//Dit is als het speelbord waarin we kunnen zien welke vakjes bezet zijn en door wie.
let spaces = Array(9).fill(null)



//Hier starten we het spel door te zorgen dat elke keer dat je op een vakje klikt, er iets gebeurt.
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

//Hier wordt een zet gedaan wanneer je op een vakje klikt. Als iemand heeft gewonnen, wordt dat weergegeven. Anders wisselen we van speler.
function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}
//Dit zijn de combinaties waarmee je het spel kunt winnen.
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Deze functie controleert of iemand heeft gewonnen op basis van de winnende combinaties.
function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

//Wanneer je op de herstartknop klikt, begint het spel opnieuw.
restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}
// Hier starten we deze spel
startGame()