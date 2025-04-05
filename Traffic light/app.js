let startButton = document.querySelector('.startBtn');

let red = document.querySelector('.red');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');
let timer = document.querySelector('.time')
let count = 0;

startButton.addEventListener("click", () => {
    let startIntervel=setInterval(()=>{
        // red.classList.remove('active');
        // yellow.classList.remove('active');
        // green.classList.remove('active');
        if(count === 0 ) {
            red.classList.add('active')
        }else if(count === 4){
            red.classList.remove('active')
            yellow.classList.add('active')
        }else if(count === 10){
            red.classList.remove('active')
            yellow.classList.remove('active')
            green.classList.add('active')
           
        }else if(count === 15){
            red.classList.remove('active')
            yellow.classList.remove('active')
            green.classList.remove('active')
            clearInterval(startIntervel);
            console.log("🚦 Traffic Light Sequence Complete!");
        }
        count ++
    },1000)
});
