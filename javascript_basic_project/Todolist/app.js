let inputfild = document.querySelector(".inputfild");

let button = document.querySelector(".btn");

let ul = document.querySelector(".ul")
button.addEventListener('click',()=>{
    console.log("button");
    
    let newvalue = inputfild.value;
    ul.innerHTML = newvalue;
})



let number = 100;

for(i=1; i<= number ; i++){
   if(number % 3 === 0){
    console.log("Fizz")
   }if(number % 5 === 0){
    console.log("Buzz");
   }if(number % 3 || number% 5 === 0){
    console.log("Fizz buzz")
   }
}

let str= ""

let newstr = ""
console.log(newstr)

for(let i = str.length-1; i>=0; i--){
    newstr += str[i]
}
console.log(newstr);

let input = 5
let value = 1;

for(let i=1; i<=input; i++){
     value *= i
     
    }
    console.log(value);


    let numbers = 12255
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let userInput;
    
    do {
        userInput = Number(prompt("Guess the number between 1 and 100:"));
    
        if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            continue; // Skip the rest and ask again
        }
    
        if (userInput > randomNumber) {
            console.log("Too high, try again!");
        } else if (userInput < randomNumber) {
            console.log("Too low, try again!");
        } else {
            alert("🎉 Congrats! You guessed the correct number: " + randomNumber);
        }
    } while (userInput !== randomNumber);
    