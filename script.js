const input = document.querySelector('.input-box')
const display = document.querySelector('.display-box')

function enter(event) {
    const enterInput = event.target.innerText
    console.log(enterInput)
    input.value = input.value + enterInput
    display.vaue = display.value + enterInput
}

// function displayAnswer () {
//     const answer = input.value
//     const num = Number(answer)
//     console.log(typeof(num))
//     console.log(num)
//     display.innerText = num
// }

function displayAnswer() {
    try {
        const answer = eval(input.value); // Using eval() to evaluate the expression
        display.innerText = answer;
        // input.value = answer;
    } catch (error) {
        display.innerText = 'Error';
    }
    input.value = ''
}

function clearDisplay() {
    input.value = ''
    display.innerText = ''
}

function backinput() {
    input.value = input.value.slice(0, -1)
}