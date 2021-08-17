 
let board = ["", "", "", "", "", "", "", "", ""]

let indices = [
  0, 1, 2, 
  3, 4, 5, 
  6, 7, 8
]





let winCombinations = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]

let a = indices[0]
let b = indices[1]
let c = indices[2]
let d = indices[3]
let e = indices[4]
let f = indices[5]
let g = indices[6]
let h = indices[7]
let i = indices[8]

let isGameActive = true
let currentPlayer = "X"

const playerxWon = "Player X won"
const playeroWon = "Player O won"
const tie = "Tie"


class Player {
    constructor(name) {
    this.name = name
    this.currentPlayer = "X"
    this.winner = false
    
    }
    
}


//Instantiating player objects from Game class
const player1 = new Player("X")
console.log(player1)
const player2 = new Player("O")
console.log(player2)
const computer = new Player("O")
console.log(computer)






const userInput = prompt("Will you be playing the computer? y/n")
if (userInput == "y") {

}


const squares = Array.from(document.querySelectorAll(".square"))
squares.forEach( (square, index) => {
  square.addEventListener('click', () => userAction(square, index))
})





function checkWin() {
  let roundWon = false
  for (let i = 0; i <= 7; i++) {
    const winCondition = winCombinations[i]
    const a = board[winCondition[0]]
    const b = board[winCondition[1]]
    const c = board[winCondition[2]]
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a == b && b == c) {
      roundWon = true
      break
    }
  }
  if (roundWon) {
    announce(currentPlayer == "X" ? playerxWon : playeroWon)
    isGameActive = false
    return
  }
  if (!board.includes(''))
    announce(tie)
}


const isValid = (square) => {
  if (square.innerText === "X" || square.innerText === "O") {
    return false
  }
  return true
}



const announcer = document.querySelector('#winner')
function announce(type) {
  switch(type) {
    case playeroWon:
      announcer.innerHTML = "Player <span class='playero'>O</span> Won"
      break
    case playerxWon:
      announcer.innerHTML = "Player <span class='playero'>X</span> Won"
      break
    case tie:
      announcer.innerText = "Tie"
  }
  announcer.classList.remove('hide')
}



const playerDisplay = document.querySelector('.player-display')

function changePlayer() {
  playerDisplay.classList.remove(`Player${currentPlayer}`)
  currentPlayer = currentPlayer === "X" ? "O" : "X"
  playerDisplay.innerText = currentPlayer
  playerDisplay.classList.add(`Player${currentPlayer}`)
}



function updateBoard (index) {
  board[index] = currentPlayer
}


const userAction = (square, index) => {
  if (isValid(square) && isGameActive) {
    square.innerText = currentPlayer
    square.classList.add(`${currentPlayer}`)
    updateBoard(index)
    checkWin()
    changePlayer()
  }
}





function reload() {
    location.reload();
    return false;
}

