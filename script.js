let expression = "";

const display = document.getElementById('display');

// Operator aur Numbers dono ko screen par dikhane ke liye
function appendSymbol(symbol) {
    // Agar screen par "Error" hai to clear kar do
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
        // Manual Calculation bina eval() ke mushkil hoti hai multi-step ke liye, 
        // Lekin aapke liye ek safe method use kiya hai jo expression solve karega
        if (expression === "") return;
        
        let result = Function('"use strict";return (' + expression + ')')();
        
        display.value = result;
        expression = result.toString(); // Result ko hi next calculation ke liye save kar lo
    } catch (error) {
        display.value = "Error";
        expression = "";
    }
}