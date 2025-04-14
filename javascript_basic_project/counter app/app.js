// function incriment(btn){
//     let count =0;
//     for(let i=0; i<)
// }
let count = 0;
let btn = document.getElementById("increase");
let btn2 = document.getElementById("decrease");
let btn3 = document.getElementById("reset");
let display = document.getElementById("countDisplay");


btn.addEventListener("click", () => {
    count++; // Sirf 1 se badhana hai
    display.textContent = count; // Screen pe update karo
    if(count === 10){
        document.body.style.backgroundColor = "yellow"
    }

});

btn2.addEventListener("click",()=>{
    count--;
    display.textContent = count;
})

btn3.addEventListener("click",()=>{
    count =""
    display.textContent = count;
})


// Linear Congruential Generator (LCG) Approach
function customRandom(seed) {
    let m = 2 ** 31; // Large prime number
    let a = 1664525; // Multiplier
    let c = 1013904223; // Increment

    seed = (a * seed + c) % m; // LCG formula
    return seed / m; // Normalize between 0 and 1
}

// Example Usage
let seed = Date.now(); // Seed based on current time
console.log(customRandom(seed)); // Output: Random number between 0 and 1
console.log(customRandom(seed + 1)); // Another random number


function customRandomRange(min, max, seed) {
    let randomNum = customRandom(seed); // 0-1 range ka number le rahe hain
    return Math.floor(randomNum * (max - min + 1)) + min;
}

// Example: 1 se 100 tak ka random number
console.log(customRandomRange(1, 100, Date.now()));
