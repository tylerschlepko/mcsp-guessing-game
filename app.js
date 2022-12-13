/*function randomNum() {
    return Math.floor(Math.random() * 10);
}*/

function ifElseStatement(value, askName){
    if(parseInt(value) === setup.number){
        setup.str += value
        setup.attempts++
        alert(`That’s Correct ${askName}! Your previous guesses were ${setup.str}!`)
        returnImprovement(askName)
        playAgain(askName)
        setup.solved = true
    } else if (parseInt(value) > setup.number){
        alert(`Sorry ${askName}, Guess Lower`)
        setup.str += value + ', '
        setup.attempts++
    } else {
        alert(`Sorry ${askName}, Guess Higher`)
        setup.str += value + ', '
        setup.attempts++
    }
}


function validation(input, nameIn){
    let name = nameIn
    if (parseInt(input) !== parseInt(input)){
        alert('Input a number between 1 - 100')
    } else if (parseInt(input) > 100 || parseInt(input) < 1){
        if (parseInt(input) < 1){
            alert('Too low, put a number between 1 - 100')
        } else if (parseInt(input) > 100){
            alert('Too high, put a number between 1 - 100')
        }
    } else {
        ifElseStatement(input, nameIn)
    }
}



function playAgain(name){
    let playAnswer = prompt('Do you want to play again?')
    setup.str = ''
    if (playAnswer.toLowerCase() === 'yes') {
        whileLoop()
    } else if (playAnswer.toLowerCase() === 'no'){
    } else {
        playAgain()
    }
}

function whileLoop(){
    setup.attempts = 0
    let askName = prompt("What's your Name?")
    while (setup.solved === false){
        let enteredValue = prompt('Guess a number between 1 - 100')
        validation(enteredValue, askName)
    }

}

let setup = {
    number : 50,
    solved : false,
    str: '',
    attempts: 0,
}
let attemptsByName = {}




let btn = document.createElement("button")
btn.innerHTML = "Click to play a game"
btn.onclick = function(){
    whileLoop()
}
document.body.appendChild(btn)




function returnImprovement(askName){
    if (attemptsByName[askName] > setup.attempts) {
        alert(`That's Correct ${askName}! And you beat your previous attempt by ${attemptsByName[askName] - setup.attempts} fewer guesses!`)
        attemptsByName[askName] = setup.attempts
    } else if (attemptsByName[askName] < setup.attempts) {
        alert(`That's Correct ${askName}! And you did worse than your previous attempt by ${setup.attempts - attemptsByName[askName]} guesses!`)
        attemptsByName[askName] = setup.attempts
    } else if (attemptsByName[askName] === setup.attempts){
        alert(`That's Correct ${askName}! You guessed the same amount as last time!`)
        attemptsByName[askName] = setup.attempts
    } else {
        attemptsByName[askName] = setup.attempts
    }
}