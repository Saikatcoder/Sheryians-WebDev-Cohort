


let button = document.querySelector('.btn2');

let index = 0; // Start index

button.addEventListener("click", () => {
    let interval = setInterval(() => {
        document.body.style.backgroundColor = theme[index];

        index++; // Next theme apply karo
        if (index >= theme.length) {
            clearInterval(interval); // Stop interval when all colors are used
        }

    }, 2000); // Every 2 seconds
});
