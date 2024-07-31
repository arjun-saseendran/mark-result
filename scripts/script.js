let inputData = document.querySelector('input');
let buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', () => {

    let mark = parseInt(inputData.value)

    if (mark >= 90) {
        inputData.style.color = 'Green'
        inputData.value = 'You got A+ grade!'
    } else if (mark >= 80) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got A grade!'
    } else if (mark >= 70) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got B+ grade!'
    } else if (mark >= 60) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got B grade!'
    } else if (mark >= 50) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got C+ grade!'
    } else if (mark >= 40) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got C grade!'
    } else if (mark >= 30) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got D+ grade!'
    } else if (mark >= 20) {
        inputData.style.color = 'Red'
        inputData.style.textAlign = 'center'
        inputData.value = 'D grade! You failed!'
    } else if (mark < 20) {
        inputData.style.color = 'Red'
        inputData.style.textAlign = 'center'
        inputData.value = 'E grade! You failed!'
    } else {
        inputData.style.color = 'Orange'
        inputData.style.textAlign = 'center'
        inputData.value = 'Enter your mark!!!'
    }
    if (inputData.value !== '' && buttonClick.innerText === 'Submit') {
        buttonClick.innerText = 'Reset'

    } else if (inputData.value !== '' && buttonClick.innerText === 'Reset') {
        buttonClick.innerText = 'Submit'
        inputData.value = null;
    }

});





