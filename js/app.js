 const arr = ["", "", "", "", "", "", "", "", ""]

class Game {
    constructor(name) {
    this.name = name
    }
    win() {

    }
    lose() {

    }
    draw() {

    }
    reset() {

    }
}


//Instantiating player objects
const player1 = new Game("Rick")
console.log(player1)
const player2 = new Game("Morty")
console.log(player2)



//Action Functions

const game = () => {
    
}


function threeInARow() {
    if (document.querySelector("#square1") == document.querySelector("#square2") == document.querySelector("#square3")){
        
    }
}

function whosTurnIsIt() {

}

function selectBox() {

}

function winner() {

}

function endGame() {

}



//Event Handlers
document.querySelector(".buttons").addEventListener("click", player1.reset)
document.querySelector(".buttons").addEventListener("click", player2.reset)