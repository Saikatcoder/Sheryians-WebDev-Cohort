# 🧮 Object Mapping Calculator  

## 📌 Overview  
This JavaScript program is a **simple calculator** that performs basic arithmetic operations (`+`, `-`, `*`, `/`) using **Object Mapping** instead of `if-else` statements.  

## 🛠️ Technology Used  
- **JavaScript (ES6+)**  

## 🚀 How It Works  
The function `Calculator(num1, num2, operator)` follows these steps:  
1️⃣ **Checks if both `num1` and `num2` are valid numbers**  
2️⃣ **Uses an object (`calculate`) to map operators to functions**  
3️⃣ **Executes only the required operation based on the input operator**  
4️⃣ **If an invalid operator is entered, it returns an error message**  

## 🔥 Code Implementation  
```js
function Calculator(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) return `Please enter a valid number`;

    let calculate = {
        "+": () => num1 + num2,
        "-": () => num1 - num2,
        "*": () => num1 * num2,
        "/": () => num1 / num2,
    };

    return calculate[operator] 
        ? `${num1} ${operator} ${num2} = ${calculate[operator]()}`
        : "Invalid operator! Please use +, -, *, or /";
}


function calculatebill(unit){
    let amount = 0;
    if(unit>400){
        amount +=(unit -400)*13;
        unit =400;
    }
    if(unit>200&&)
}