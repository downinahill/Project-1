 const boardArr = ["", "", "", "", "", "", "", "", ""]

class Game {
    constructor(name) {
    this.name = name
    this.currentPlayer = null
    this.winner = null
    
    }
    win() {

    }
    lose() {

    }
    draw() {

    }
    reset() {
        clearBoard()
    }
}


//Instantiating player objects from Game class
const player1 = new Game("X")
console.log(player1)
const player2 = new Game("O")
console.log(player2)



//Action Functions

const game = () => {
    
}

const player = "O";
const computer = "X";

const addPlayerMove = e => {
  if (boardArr[e] == "") {
    boardArr[e] = player;
    
    computerMove();
  }
};

// function threeInARow() {
//     if (document.querySelector("#square1") == document.querySelector("#square2") == document.querySelector("#square3")) {

//     }
//     if (document.querySelector("#square4") == document.querySelector("#square5") == document.querySelector("#square6")) {

//     }
//     if (document.querySelector("#square7") == document.querySelector("#square8") == document.querySelector("#square9")) {

//     }



// }

function whosTurnIsIt() {

}

function selectBox() {

}

function checkWinner(move) {
    
        let result = false;
        if (checkRow(1, 2, 3, move) ||
            checkRow(4, 5, 6, move) ||
            checkRow(7, 8, 9, move) ||
            checkRow(1, 4, 7, move) ||
            checkRow(2, 5, 8, move) ||
            checkRow(3, 6, 9, move) ||
            checkRow(1, 5, 9, move) ||
            checkRow(3, 5, 7, move)) {
  
          result = true;
        }
  
        return result;
  
}

function checkRow(a, b, c, move) {//it's going to call 3 different squares to see if those 3 squares matches a parrticular move
    let result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move){ //if three x are in a row it is going to have a true result
      result = true;
    }
    return result;
  }
  
  function getBox() { //to identify the position of every box
    return document.querySelector(".square" + `${boardArr[i]}`).innerHTML = `${boardArr[i]}`;//it will tell us what it is in the box
  }
  
  function clearBox(number) {
    document.querySelector(".square" + number).innerHTML = "";
  }

const computerMove = () => {
    do {
        chosenSquare = Math.floor(Math.random() * 9)
    } while (boardArr[chosenSquare] != "")
    boardArr[chosenSquare] = computer

}
console.log(computerMove())
function clearBoard() {
    
    document.querySelector("#reset").innerHTML = "";
      
}

function endGame() {

}


// Call functions
addPlayerMove()
computerMove()
checkWinner()

//Event Handlers
document.querySelector(".buttons").addEventListener("click", clearBoard())
