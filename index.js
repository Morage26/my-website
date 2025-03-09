"use strict";
const result = document.getElementById('resultbox');
//Qiimihii shaashada lagasoo aqrin karaa markii la riixo
function appendValue(value) {
    if (value === '(') {
        result.value += '*';
    }
    result.value += value;
}
///Shaashada function kii Nadiifin lahaa
function ClearDisplay() {
    result.value = '';
}
//Markii la rabo in hal lambar la tiro function ki qaban laaa
function deleteLast() {
    result.value = result.value.slice(0, -1);
}
//Function kii equal button ka wuxuu soo saaraayo xukumaayo
function calculateResult() {
    try {
        result.value = eval(result.value).toString();
    }
    catch (error) {
        result.value = 'Error';
    }
}
//Function ka maamulaayo sida operator ka uu usoo baxaayo
function convertOperator(operator) {
    switch (operator) {
        case 'x':
            return '*';
        case '+':
            return '+';
        case '-':
            return '-';
        case '÷':
            return '/';
        default:
            return operator;
    }
}
//Function ka percentage u badalaayo lambarkii loo baaso
function handlePercentage() {
    const currentValue = parseFloat(result.value);
    if (!isNaN(currentValue)) {
        result.value = (currentValue / 100).toString();
    }
}
//Wixii la qaban lahaa marka buttons ka shaqooyin qabaanyo la riixo
document.querySelectorAll('.bg-gray-500 , .bg-gray-300').forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        if (value === 'C') {
            ClearDisplay();
        }
        else if (value === '⌫') {
            deleteLast();
        }
        else if (value === '=') {
            calculateResult();
        }
        else if (value === '%') {
            handlePercentage();
        }
        else {
            const operator = convertOperator(value);
            appendValue(operator);
        }
    });
});
