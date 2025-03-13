**Q1: Yeh code ka output kya hoga? 🤔**
## js..
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