let love = document.getElementById('love');
let count = 0
love.addEventListener('dblclick',()=>{
    love.style.fill = "red"
    love.innerHTML = count++
});