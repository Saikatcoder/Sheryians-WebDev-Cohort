# Character Case Checker 🔤

## 📌 Overview  
This JavaScript program **checks whether a given single character is uppercase, lowercase, or not a letter**.  
It uses **ASCII values** to determine the character type.

## 🛠️ Technology Used  
- **JavaScript (ES6+)**  

## 🚀 How It Works  
The function `characterCaseCheck(chr)` works as follows:  
1️⃣ **If input is more than one character**, it returns `"Please enter only a single character"`.  
2️⃣ **If character is between `A-Z` (ASCII: 65-90)**, it returns `"Uppercase Letter"`.  
3️⃣ **If character is between `a-z` (ASCII: 97-122)**, it returns `"Lowercase Letter"`.  
4️⃣ **If it's not a letter (like `5`, `@`, etc.), it returns `"Not a Letter"`**.  

## 🔥 Code Implementation  
```js
function characterCaseCheck(chr) {
    if (chr.length !== 1) return `Please enter only a single character`;

    let charCode = chr.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) return `Uppercase Letter`;
    else if (charCode >= 97 && charCode <= 122) return "Lowercase Letter";
    else return "Not a Letter";
}

// 🔥 Test Cases
console.log(characterCaseCheck("A"));  // Output: "Uppercase Letter"
console.log(characterCaseCheck("m"));  // Output: "Lowercase Letter"
console.log(characterCaseCheck("5"));  // Output: "Not a Letter"
console.log(characterCaseCheck("@"));  // Output: "Not a Letter"
console.log(characterCaseCheck("Ab")); // Output: "Please enter only a single character"


📝 Features
✅ Uses ASCII values for accurate case detection.
✅ Handles edge cases (numbers, symbols, multiple characters).
✅ Short and optimized logic.