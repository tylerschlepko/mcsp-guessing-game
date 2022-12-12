var number = 5
var solved = false
var count = 1
while (solved === false){
    var enteredValue = prompt('Guess the number')
    if(parseInt(enteredValue) === number){
        alert(`Correct! It only took you ${count} guesses!`)
        solved = true
    } else if (parseInt(enteredValue) > number){
        alert('Lower')
        count += 1
    } else {
        alert('Higher')
        count += 1
    }
}