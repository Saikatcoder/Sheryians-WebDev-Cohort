# Find the Largest of Three Numbers 🔢

## 📌 Overview  
This JavaScript program takes **three numbers as input** and **returns the largest** among them **without using `Math.max()`**.

## 🛠️ Technology Used  
- **JavaScript (ES6+)**  

## 🚀 How It Works  
The function `findNumber(num1, num2, num3)` follows these steps:  
1️⃣ **Check if `num1` is greater than `num2` and `num3`**, return `num1`.  
2️⃣ **Else, check if `num2` is greater than `num3`**, return `num2`.  
3️⃣ **If both conditions fail, return `num3` (as the largest number).**  

## 🔥 Code Implementation  
```js
function findNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// 🔥 Test Cases
console.log(findNumber(10, 25, 15));  // Output: 25
console.log(findNumber(45, 5, 30));   // Output: 45
console.log(findNumber(-3, -7, -1));  // Output: -1
console.log(findNumber(100, 100, 50)); // Output: 100
