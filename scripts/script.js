let inputData = document.querySelector('input');
let buttonClick = document.querySelector('button');

buttonClick.addEventListener('click', () => {

    let mark = parseInt(inputData.value)
    let invalid = false;

    if(mark < 0 || mark > 100){
        inputData.style.color = 'Orange'
        inputData.style.textAlign = 'center'
        inputData.value = 'Enter your mark!!!'
        invalid = true;
    }

    if (mark >= 90 && !invalid) {
        inputData.style.color = 'Green'
        inputData.value = 'You got A+ grade!'
        
    } else if (mark >= 80 && !invalid) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got A grade!'
    } else if (mark >= 70 && !invalid) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got B+ grade!'
    } else if (mark >= 60 && !invalid) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got B grade!'
    } else if (mark >= 50 && !invalid) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got C+ grade!'
    } else if (mark >= 40 && !invalid) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got C grade!'
    } else if (mark >= 30 && !invalid) {
        inputData.style.color = 'Green'
        inputData.style.textAlign = 'center'
        inputData.value = 'You got D+ grade!'
    } else if (mark >= 20 && !invalid) {
        inputData.style.color = 'Red'
        inputData.style.textAlign = 'center'
        inputData.value = 'D grade! You failed!'
    } else if (mark < 20 && !invalid) {
        inputData.style.color = 'Red'
        inputData.style.textAlign = 'center'
        inputData.value = 'E grade! You failed!'
    }else {
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






