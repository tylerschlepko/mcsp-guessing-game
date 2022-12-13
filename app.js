/*function randomNum() {
    return Math.floor(Math.random() * 10);
  }*/

function ifElseStatement(value, askedName){
    if(parseInt(value) === setup.number){
        setup.str += value
        alert(`That’s Correct ${askedName}! Your previous guesses were ${setup.str}!`)
        playAgain()
        setup.solved = true
    } else if (parseInt(value) > setup.number){
        alert(`Sorry ${askedName}, Guess Lower`)
        setup.str += value + ', '
    } else {
        alert(`Sorry ${askedName}, Guess Higher`)
        setup.str += value + ', '
    }
}


function validation(input){
    if (parseInt(input) === NaN){
        alert('Input a number between 1 - 100')
    } else if (parseInt(input) > 100 || parseInt(input) < 1){
        if (parseInt(input) < 1){
            alert('Too low, put a number between 1 - 100')
        } else if (parseInt(input) > 100){
            alert('Too high, put a number between 1 - 100')
        }
    } else {
        ifElseStatement(input, askName)
    }
}



function playAgain(){
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
    while (setup.solved === false){
        let enteredValue = prompt('Guess a number between 1 - 100')
        validation(enteredValue)
    }
}

let setup = {
    number : 50,
    solved : false,
    str : '',
    attemptsByName : {},
}


// function returnImprovement(name){
//     let objName = setup[attemptsByName[name]]
//     if (objName === undefined){
//         objName = attempts
//     } else if (objName > attempts) {
//         alert(`That's Correct ${name}! And you beat your previous attempt by ${objName - attempts} fewer guesses!`)
//         objName = attempts
//     } else {
//         alert(`That's Correct ${name}! And you did worse than your previous attempt by ${attempts - objName} guesses!`)
//     }
// }

let askName = prompt("What's your Name?")
whileLoop()

