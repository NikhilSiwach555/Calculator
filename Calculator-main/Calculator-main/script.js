let currentInput = '';

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function append(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput && '0123456789'.includes(currentInput.slice(-1))) {
        currentInput += operator;
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 2000);
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

document.addEventListener('keydown', (event) => {
    const allowedKeys = '0123456789+-*/'.split('');
    const { key } = event;
    if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (allowedKeys.includes(key)) {
        append(key);
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
});
