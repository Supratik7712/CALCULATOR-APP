const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'num') {
            display.value += button.textContent;
        } else if (button.className === 'op') {
            display.value += button.textContent;
        } else if (button.className === 'equals') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.className === 'clear') {
            display.value = '';
        } else if (button.className === 'backspace') {
            display.value = display.value.slice(0, -1);
        }
    });
});
