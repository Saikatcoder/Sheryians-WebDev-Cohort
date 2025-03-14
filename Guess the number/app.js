// Selecting elements
let inputbox = document.querySelector("#inputbox"); // Use ID for input
let button = document.querySelector(".btn");
let numberDisplay = document.querySelector(".number");
let wrong = document.querySelector(".wrong");
let resetButton = document.querySelector(".reset");
let evenoddNumber = document.querySelector(".even-odd");
let periviousValue = document.querySelector(".previousvalue");
// Generate a random number once
function randomNumbefunction(){
    return  Math.floor(Math.random() * 100) + 1;
}
let  randomNumber = randomNumbefunction()
console.log("Random Number (Debugging):", randomNumber); // Debugging
// Track the number of attempts
let attempts = 0;
let maxAttempts = 5;


let previousGuess = [];

button.addEventListener("click", () => {
    let newvalue = Number(inputbox.value); // Convert input to number
    previousGuess.push(newvalue);
    periviousValue.innerText = `Previous guesses: ${previousGuess.join(", ")}`;
    // Validation check
    if (isNaN(newvalue) || newvalue < 1 || newvalue > 100) {
        alert("❌ Enter a valid number between 1 and 100!");
        return;
    }

    attempts++; // Increment attempts

    if (newvalue === randomNumber) {
        numberDisplay.innerHTML = `🎉 Correct! The number was ${randomNumber} 🔥🔥`;
        numberDisplay.style.color = "green";
        button.disabled = true;
        evenoddNumber.innerHTML ="" 
        inputbox.value= "";// Disable button after correct guess
    } else  {
        if(newvalue% 2 === 0 ){
            evenoddNumber.innerHTML = `your number is even number`
        }else{
            evenoddNumber.innerHTML = `your number is odd number`
        }
        let difference = Math.abs(randomNumber - newvalue);
        if(difference <= 10){
            alert("🔥 Hot! You're close!");
        }else{
            alert("❄️ Cold! Try something closer!");
        }

        numberDisplay.innerHTML = newvalue > randomNumber ? "your number is to high" : "your number is to low" 
    }
    // Display remaining attempts
    wrong.innerHTML = `Attempts left: ${maxAttempts - attempts}`;
    // Check if attempts are over
    if (attempts >= maxAttempts) {
        numberDisplay.innerHTML = `💀 Game Over! The number was ${randomNumber}`;
        button.disabled = true; // Disable button after max attempts
    }
});


resetButton.addEventListener('click',()=>{
    console.log('click');
    attempts = 0;
    randomNumber = randomNumbefunction();
    inputbox.value= "";
    numberDisplay.innerHTML = "";
    button.disabled = false;
})