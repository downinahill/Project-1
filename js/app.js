let board = ["", "", "", "", "", "", "", "", ""];
let winCombinations = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];
const x = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cWn9nAZzm0tzg8ZYDNEo7rOo14-Qqg8pzcnnlZ3l9Xd7idX6HPCphH-6ueJFetYVidg&usqp=CAU')";
const o = "url('https://ih1.redbubble.net/image.959324203.0028/flat,750x,075,f-pad,750x1000,f8f8f8.jpg')";

// initialize starting game variable to true
let isGameActive = true
// initialize the starting player to Morty
let currentPlayer = "Morty";

// creates array from the grid of squares in html
const squares = Array.from(document.querySelectorAll(".square"));
// iterates through that array just created and adds a clickable event listener
// to each square while also loading the userAction function
squares.forEach( (square, index) => {
  square.addEventListener('click', () => userAction(square, index))
})


function checkWin() {
  // initialize win condition to false
  let roundWon = false
  // iterate through the winCombinations array
  for (let i = 0; i <= winCombinations.length - 1; i++) {
    const winCondition = winCombinations[i]
    const a = board[winCondition[0]]
    const b = board[winCondition[1]]
    const c = board[winCondition[2]]
    // if there's an empty box continue the game
    if (a === '' || b === '' || c === '') {
      continue
    }
    // if any winning combination is found, roundWon becomes true and the game ends
    if (a == b && b == c) {
      roundWon = true
      break
    }
  } // if game is won the winner is announced in the display section
  if (roundWon) {
    announce(currentPlayer == "Morty" ? "Rick": "Morty")
    isGameActive = false
    return
  }
  if (!board.includes(''))
    announce("Tie")
}

const isValid = (square) => { // a square is valid if it does not contain rick or morty
  if (square.getAttribute("class") === "square Morty" || square.getAttribute("class") === "square Rick") {
    return false
    } 
  return true
}



// select class winner from DOM and store it in announcer variable
const announcer = document.querySelector('#winner')
function announce(winner) {
  announcer.innerHTML = winner === 'Tie' ? winner : `Player <span class='playero'>${winner}</span> Won`;
  isGameActive = false;
  announcer.classList.remove('hide')
}

// if current player does not equal Morty then it equals Rick and this gets displayed on the DOM
function changePlayer() {
  currentPlayer = currentPlayer === "Morty" ? "Rick" : "Morty";
  document.querySelector('.players').innerHTML = currentPlayer
  
}

const userAction = (square, index) => { //if the square is open and the game is running, place a picture of Morty on the square. Otherwise place a picture of Rick there
  if (isValid(square) && isGameActive) {
    square.style.backgroundImage = currentPlayer === 'Morty' ? x : o;
    square.classList.add(`${currentPlayer}`)
    updateBoard(index)
    changePlayer()
    checkWin()
    }
}


// displays current player
function updateBoard (index) {
  board[index] = currentPlayer
}

// clear the board and reset the game
function reload() {
    location.reload();
    return false;
}

