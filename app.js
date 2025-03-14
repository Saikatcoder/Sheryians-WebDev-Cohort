let interval; // To store the interval reference

function startButton() {
    let value = document.getElementById("input").value;
    let countdown = parseInt(value);
    let timerDisplay = document.getElementById("timer");

    if (isNaN(countdown) || countdown <= 0) { 
        alert("Please enter a valid number!"); 
        return; 
    }

    clearInterval(interval); // Clear any existing timer before starting a new one

    timerDisplay.innerHTML = countdown; // Display initial value

    interval = setInterval(() => {
        countdown--; // Decrease value
       
        timerDisplay.style.color = getRandomColor()
        document.body.style.backgroundColor = getRandomColor(); 
        // getRandomColor();
        if (countdown === 0) { 
            clearInterval(interval); 
            timerDisplay.innerHTML = "Time's up! ⏳";
        } else {
            timerDisplay.innerHTML = countdown;
        }

    }, 1000);
}
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function resetTimer() {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "";
    document.getElementById("input").value = "";
}

function pausebutton(){
    clearInterval(interval)
}