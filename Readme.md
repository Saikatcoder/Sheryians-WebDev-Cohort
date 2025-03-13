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