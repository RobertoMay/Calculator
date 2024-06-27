let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 10) {  // Limita la longitud de la entrada actual a 10 caracteres
        currentInput += number;
        updateDisplay();
    }
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (currentOperation !== null) calculateResult();
    previousInput = currentInput;
    currentOperation = operation;
    currentInput = '';
}

function updateDisplay() {
    display.innerText = currentInput || previousInput || '0';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    updateDisplay();
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    currentOperation = null;
    previousInput = '';
    updateDisplay();
}
