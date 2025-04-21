const resultElement = document.getElementById("result");
const expression = document.getElementById('calculation');

const message = document.getElementById('headline');

let result = "0";
let expressionValue ="";
let messagedisply = "";

function appendNumber(number){

    result = result === '0'? number: result+number;
    expressionValue = expressionValue + number;

    updateDisplay()
}
function setOperator(){
    
}
function updateDisplay(){
    resultElement.textContent = result;
    expression.textContent = expressionValue;
    message.textContent = messagedisply
}

updateDisplay()