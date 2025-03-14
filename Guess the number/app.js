// Selecting elements
let inputbox = document.querySelector("#inputbox"); 
let button = document.querySelector(".btn");
let numberDisplay = document.querySelector(".number");
let wrong = document.querySelector(".wrong");
let resetButton = document.querySelector(".reset");
let evenoddNumber = document.querySelector(".even-odd");
let periviousValue = document.querySelector(".previousvalue");
let attempt = document.querySelector(".attempts");

// Generate a random number once
function randomNumbefunction(){
    return Math.floor(Math.random() * 100) + 1;
}
let randomNumber = randomNumbefunction();
console.log("Random Number (Debugging):", randomNumber); 

// Track the number of attempts
let attempts = 0;
let maxAttempts = 5;
let previousGuess = [];

button.addEventListener("click", () => {
    let newvalue = Number(inputbox.value); // Convert input to number

    // Validation check
    if (isNaN(newvalue) || newvalue < 1 || newvalue > 100) {
        alert("❌ Enter a valid number between 1 and 100!");
        return;
    }

    previousGuess.push(newvalue);
    periviousValue.innerText = `Previous guesses: ${previousGuess.join(", ")}`;
    
    attempts++; // Increment attempts

    if (newvalue === randomNumber) {
        numberDisplay.innerHTML = `🎉 Correct! The number was ${randomNumber} 🔥🔥`;
        numberDisplay.style.color = "green";
        button.disabled = true;
        inputbox.disabled = true;  // ✅ Corrected
        document.body.style.backgroundColor = "green"; // ✅ Green background when user wins
    } else {
        evenoddNumber.innerHTML = newvalue % 2 === 0 ? "Your number is even" : "Your number is odd";

        let difference = Math.abs(randomNumber - newvalue);
        if (difference <= 10) {
            alert("🔥 Hot! You're close!");
        } else {
            alert("❄️ Cold! Try something closer!");
        }

        numberDisplay.innerHTML = newvalue > randomNumber ? "Your number is too high" : "Your number is too low";
    }

    // Display remaining attempts
    let remainingAttempts = maxAttempts - attempts;
    wrong.innerHTML = `Attempts left: ${remainingAttempts}`;

    // Show message when the user has made 3 guesses
    if (attempts === 3) {
        attempt.innerHTML = `⚠️ You've made 3 guesses so far!`;
    }

    // Check if attempts are over
    if (attempts >= maxAttempts) {
        numberDisplay.innerHTML = `💀 Game Over! The number was ${randomNumber}`;
        button.disabled = true; 
        inputbox.disabled = true;  // ✅ Disable input box on game over
        document.body.style.backgroundColor = "red"; // ✅ Red background when user loses
    }
});

// Reset Game
resetButton.addEventListener('click', () => {
    console.log('click');
    attempts = 0;
    randomNumber = randomNumbefunction();
    inputbox.value = "";
    numberDisplay.innerHTML = "";
    wrong.innerHTML = "";
    evenoddNumber.innerHTML = "";
    periviousValue.innerHTML = "";
    attempt.innerHTML = "";
    previousGuess = [];
    button.disabled = false;
    inputbox.disabled = false;
    document.body.style.backgroundColor = ""; // ✅ Reset background color
});
