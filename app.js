var number = 5
var enteredValue = prompt('Guess the number')
if(parseInt(enteredValue) === number){
    alert('Correct!')
} else if (parseInt(enteredValue) > number){
    alert('Lower')
} else {
    alert('Higher')
}