let expression = "";

const display = document.getElementById('display');

// here i am showing the numbers and operator on screen for users
function appendSymbol(symbol) {
    // if there is any error clear it 
    if (display.value === "Error") expression = "";
    
    expression += symbol;
    display.value = expression;
}

function clearDisplay() {
    expression = "";
    display.value = "";
}

function deleteLast() {
    expression = expression.toString().slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        // this is the code were i am trying to calculate the numbers first we convert the string to the real math then perform it  
        if (expression === "") return;
        
        let result = Function('"use strict";return (' + expression + ')')();
        
        display.value = result;
        expression = result.toString(); // Result save for the next calculation if user want the result for the more calculation user can use the result
    } catch (error) {
        display.value = "Error";
        expression = "";
    }
}