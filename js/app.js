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
  // iterate through the winCombinations array
  for (let i = 0; i <= winCombinations.length - 1; i++) {
    const winCondition = winCombinations[i];
    const choices = [board[winCondition[0]], board[winCondition[1]], board[winCondition[2]]];

    // if there's an empty box continue the game
    if (choices.some(i => i == '')) {
      continue
    }
    // if any winning combination is found, roundWon becomes true and the game ends
    if (choices.every( (val, i, arr) => val === arr[0])) {
      // if game is won the winner is announced in the display section
      announce(currentPlayer);
      break;
    }
  } 

  
  if (!board.includes(''))
    announce('Tie'); 
}

const isValid = (square) => { // a square is valid if it does not contain rick or morty
  
  return !(square.innerText === "Morty" || square.innerText === "Rick");
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
    checkWin()
    changePlayer()
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



 
// let board = ["", "", "", "", "", "", "", "", ""]

// // let indices = [
// //   0, 1, 2, 
// //   3, 4, 5, 
// //   6, 7, 8
// // ]





// let winCombinations = [
//    [0, 1, 2],
//    [3, 4, 5],
//    [6, 7, 8],
//    [0, 3, 6],
//    [1, 4, 7],
//    [2, 5, 8],
//    [0, 4, 8],
//    [2, 4, 6]
// ]

// // let a = indices[0]
// // let b = indices[1]
// // let c = indices[2]
// // let d = indices[3]
// // let e = indices[4]
// // let f = indices[5]
// // let g = indices[6]
// // let h = indices[7]
// // let i = indices[8]

// // initialize starting game variable to true
// let isGameActive = true
// // initialize the starting player to X
// let currentPlayer = "X"

// const playerxWon = "Player X won"
// const playeroWon = "Player O won"
// const tie = "Tie"




// // creates array from the grid of squares in html
// const squares = Array.from(document.querySelectorAll(".square"))
// // iterates through that array just created and adds a clickable event listener
// // to each square while also loading the userAction function
// squares.forEach( (square, index) => {
//   square.addEventListener('click', () => userAction(square, index))
// })

// console.log(squares)



// function checkWin() {
//   // initialize win condition to false
//   let roundWon = false
//   // iterate through the winCombinations array
//   for (let i = 0; i < winCombinations.length; i++) {
//     const winCondition = winCombinations[i]
//     const a = board[winCondition[0]]
//     const b = board[winCondition[1]]
//     const c = board[winCondition[2]]
//     // if there's an empty box continue the game
//     if (a === '' || b === '' || c === '') {
//       continue
//     }
//     // if any winning combination is found, roundWon becomes true and the game ends
//     if (a == b && b == c) {
//       roundWon = true
//       break
//     }
//   } // if game is won the winner is announced in the display section
//   if (roundWon) {
//     announce(currentPlayer == "X" ? playerxWon : playeroWon)
//     isGameActive = false
//     return
//   }
//   if (!board.includes(''))
//     announce(tie)
// }
// console.log(checkWin)

// const isValid = (square) => {
//   // if the inner text of the square has an X or an O then it is not a 
//   // valid square in which to click
//   if (square.innerText === "X" || square.innerText === "O") {
//     return false
//   }
//   return true
// }


// // select class winner from DOM and store it in announcer variable
// const announcer = document.querySelector('#winner')
// function announce(type) {
//   switch(type) { // if player x won then display it in the announcer section
//     case playerxWon:
//       announcer.innerHTML = "Player <span class='playero'>X</span> Won"
//       break
//     case playeroWon: // if player o won then display it in the announcer section
//       announcer.innerHTML = "Player <span class='playero'>O</span> Won"
//       break
//     case tie: // if no one won then display a tie
//       announcer.innerText = "Tie"
//   }
//   announcer.classList.remove('hide')
// }
// console.log(announcer)
// console.log(announce)

// const showPlayer = document.querySelector('.display')

// // function changePlayer() {
// //   showPlayer.classList.remove(`Player${currentPlayer}`)
// //   currentPlayer = currentPlayer === "X" ? "O" : "X"
// //   showPlayer.innerText = currentPlayer
// //   showPlayer.classList.add(`Player${currentPlayer}`)
// // }

// function changePlayer() {
//   currentPlayer = currentPlayer === "X" ? "O" : "X"
//   showPlayer.innerHTML = currentPlayer
// }





// const userAction = (square, index) => {
//   if (isValid(square) && isGameActive) {
//     square.innerText = currentPlayer
//     square.classList.add(`${currentPlayer}`)
//     updateBoard(index)
//     checkWin()
//     changePlayer()
//   }
// }




// // clear the board and reset the game
// function reload() {
//     location.reload();
//     return false;
// }


