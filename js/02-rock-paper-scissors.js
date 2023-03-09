let rock = 'rock'
let paper = 'paper'
let scissors = 'scissors'


let userChoice = collectUserInput()
let computerChoice = Math.random()


if (computerChoice <= .33) {
    computerChoice = rock
} else if (computerChoice <= .67) {
    computerChoice = paper
} else {
    computerChoice = scissors
}


if (userChoice === computerChoice) {
    alert('You tied! Try again.')
} else if (doesBeat(userChoice, computerChoice)) {
    alert('You beat the computer!')
} else {
    alert('The computer wins!')
}


function collectUserInput(){
    let userSelection
    do {
        userSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
    } while (!isValidUserInput(userSelection));
    return userSelection
}

function isValidUserInput(userInput) {
    switch(userInput) {
        case rock:
        case paper:
        case scissors:
            return true
        default: 
            return false  
    } 
}

function doesBeat(choiceOne, choiceTwo) {
    switch(choiceOne) {
        case rock:
            return choiceTwo === scissors
        case paper:
            return choiceTwo === rock
        case scissors:
            return choiceTwo === paper    
    }
} 


