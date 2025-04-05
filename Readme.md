## js..

**Q1: Yeh code ka output kya hoga? 🤔**
let arr = [1, 2, 3];

arr.map((num, index, a) => {
    a.push(num * 2);
});

console.log(arr);
##**👉 Original array change hoga ya nahi?**


**Q2: Yeh code ka output kya hoga?**

js
let arr = [1, 2, 3];

arr.forEach(num => {
    arr.push(num * 2);
});

console.log(arr);
## **👉 Kya yeh infinite loop me chala jayega ya nahi?**

 **Kya Hoga?**
---✅ JavaScript me forEach() original array pe loop chalata hai, lekin agar tum usi array me naye elements add karte jaoge (push() use karke),     to  loop kabhi khatam hi nahi hoga!

🔸 Step by Step Execution: 1️⃣ forEach() shuru me arr = [1, 2, 3] pe chalega
2️⃣ 1 ko arr.push(1 * 2); → arr ban gaya [1, 2, 3, 2]
3️⃣ 2 pe loop chala, arr.push(2 * 2); → arr = [1, 2, 3, 2, 4]
4️⃣ Loop naye elements pe bhi chal raha hai, isliye kabhi khatam nahi hoga! (Infinite loop ⚠️)


## 🔥 Mini Project Ideas (HTML, CSS, JS)
**1️⃣ Countdown Timer with Stop/Pause Feature**
--Concepts Used: while loop, setInterval, clearInterval
--Task: Create a countdown timer where the user enters a number, and it counts down to 0, with "Pause" --and "Reset" buttons.
--Bonus: Add animations for a smooth effect.









## 🌟 Today, I Learned About CSSOM & I Want to Share It With Everyone! 🎨🔥

As developers, we often talk about the **DOM (Document Object Model)**, which helps us manipulate **HTML elements** using JavaScript. But how often do we discuss **CSSOM (CSS Object Model)?** 🤔

Today, I came across **CSSOM**, and I found it really interesting! So, I decided to share my learnings with you all. 😃

---

### 🛠️ What is CSSOM?
CSSOM is a **JavaScript API** that allows us to **dynamically modify CSS styles** at runtime. It enables us to change CSS rules using JavaScript **without modifying external stylesheets!**

---

### 💡 What Can We Do With CSSOM?
✅ **Dynamically change styles:**  
```js
document.body.style.backgroundColor = "lightblue";
document.querySelector("p").style.fontSize = "20px";
```
✅ **Modify existing CSS rules:**  
```js
let stylesheet = document.styleSheets[0];  
stylesheet.insertRule("p { color: red; }", stylesheet.cssRules.length);
```
✅ **Control themes & animations using JavaScript!**  

---

### 🌙 Implementing Dark Mode with CSSOM
One great use case for CSSOM is **switching between light and dark themes dynamically!**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode Example</title>
    <style>
        body {
            background-color: white;
            color: black;
            transition: background-color 0.5s, color 0.5s;
        }
        .dark-mode {
            background-color: black !important;
            color: white !important;
        }
        button {
            margin-top: 20px;
            padding: 10px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <h1>Toggle Dark Mode</h1>
    <button onclick="toggleDarkMode()">Switch Theme</button>

    <script>
        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }
    </script>
</body>
</html>
```

---

### 🚀 DOM vs. CSSOM – What’s the Difference?
| Feature | DOM | CSSOM |
|---------|-----|-------|
| Represents | HTML Elements | CSS Rules |
| Modified using | `element.innerHTML` | `document.styleSheets` |
| Performance | Fast | Can be slower |

---

### 💡 How the Browser Processes HTML & CSS

#### 🔧 Example HTML & CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSSOM Example</title>
    <style>
        body {
            background-color: lightblue;
        }
        h1 {
            color: red;
            font-size: 24px;
        }
        p {
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

#### 🌀 Browser Processing Steps
1️⃣ **DOM Tree (HTML Structure)**  
```
Document
 ├── html
 │   ├── head
 │   │   ├── meta
 │   │   ├── title
 │   │   ├── style
 │   ├── body
 │       ├── h1 ("Hello, World!")
 │       ├── p ("This is a paragraph.")
```

2️⃣ **CSSOM Tree (CSS Structure)**  
```
CSSOM Tree
 ├── Stylesheet
 │   ├── body { background-color: lightblue; }
 │   ├── h1 { color: red; font-size: 24px; }
 │   ├── p { color: green; font-weight: bold; }
```

3️⃣ **Render Tree (Combining DOM + CSSOM)**  
```
Render Tree
 ├── body { background-color: lightblue; }
 │   ├── h1 { color: red; font-size: 24px; } ("Hello, World!")
 │   ├── p { color: green; font-weight: bold; } ("This is a paragraph.")
```

---

### 💯 Why Should You Learn CSSOM?
💡 **To create real-time theme changes & animations.**  
💡 **To dynamically update CSS without external stylesheets.**  
💡 **To build advanced UI/UX experiences.**  

---

### 💬 Have You Ever Used CSSOM?
I’d love to know—have you used **CSSOM** in any of your projects? If not, would you consider trying it in your next project? 🚀

I believe **CSSOM is an underrated topic** that every frontend developer should know about! 😃

#CSSOM #WebDevelopment #Frontend #JavaScript #CSS #DarkMode #Learning

D